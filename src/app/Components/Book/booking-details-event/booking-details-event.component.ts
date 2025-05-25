import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaypalService } from '../../../Services/paypal.service';
import { AuthService } from '../../../Services/auth.service';
import { SharedService, show, CheckoutTicket, Schedule } from '../../../Services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '../../../Services/toastr.service';

declare var paypal: any;

@Component({
  selector: 'app-booking-details-event',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-details-event.component.html',
  styleUrl: './booking-details-event.component.css'
})
export class BookingDetailsEventComponent implements OnInit {

  constructor(private payPalService: PaypalService, private _sharedService: SharedService, private route: ActivatedRoute,
     private _authService: AuthService, private toastr: ToastrService, private router: Router) { }

  show: any;

  currentUser: any;

  showDetails: show =
  {
    id: 1,
    title: 'Cinderella',
    category: 'Dance',
    imageSmall: 'img/Shows/d1.jpg',
    imageLarge: 'img/Shows/d11.jpg',
    rating: 3.5,
    description: `A mesmerizing performance blending ballet and storytelling, Cinderella brings the classic fairytale to life with stunning choreography and enchanting music.`,
    date: 'Jun 12 - 2025',
    location: 'Cairo Opera House',
    fullLocation: 'Cairo, Egypt',
    price: 500,
    isFavorite: false,
    word: 'Enchanting!',
    reviews: 6,
    qoute: "Step into a world of wonder!",
    subQoute: "Experience a fairytale on stage."
  }

  checkoutTicket: CheckoutTicket[] = [];

  scheduleDetails: Schedule = {
    date: '',
    day: '',
    time: ''
  };

  totalPrice: number = 0;
  clientId: string = '';

  async ngOnInit() {

    this.currentUser = this._authService.currentUser;
    this._authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.route.paramMap.subscribe(params => {
      const newId = Number(params.get('id'));
      this.show = this._sharedService.shows.find(s => s.id === newId);

      if (this.show) {
        this.showDetails = this.show;
      }

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Show ID:', id);

    this.checkoutTicket = this._sharedService.checkoutTicket;
    this.totalPrice = this.checkoutTicket.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0);
    this.scheduleDetails = this._sharedService.scheduleDetails;

    });

    try {
      this.clientId = this.payPalService.clientId;

      const paypal = await this.payPalService.loadPayPal(this.clientId);

      if (!paypal || !paypal.Buttons) {
        console.error('PayPal SDK failed to load');
        return;
      }

      paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: this.totalPrice.toFixed(2) } }]
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log('Payment captured:', order);
          // window.location.href = `/success?orderId=${data.orderID}`;
          this.toastr.success('Payment successful!');
          setTimeout(() => {
            this.router.navigate(['profile/bookingHistory']);
          }, 2500);
        },
        onError: (err: any) => {
          console.error('PayPal Error:', err);
          this.toastr.error('Payment failed. Please try again.');
        }
      }).render('#paypal-button-container');

    } catch (error) {
      console.error('Error initializing PayPal:', error);
    }
  }

}
