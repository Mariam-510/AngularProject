import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaypalService } from '../../../Services/paypal.service';
import { SharedService, match, CheckoutTicket } from '../../../Services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

declare var paypal: any;

@Component({
  selector: 'app-booking-details-match',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-details-match.component.html',
  styleUrl: './booking-details-match.component.css'
})
export class BookingDetailsMatchComponent implements OnInit {

  constructor(private payPalService: PaypalService, private _sharedService: SharedService, private route: ActivatedRoute, private _authService: AuthService) { }
  
  match: any;

  currentUser: any;

  matchDetails: match =
  {
        id: 1,
        image: 'img/cairo staduim.jpg',
        venue: 'Cairo International Stadium, Cairo',
        date: 'Fri 28 Mar 2025',
        tournament: 'World Cup Qualifiers 2025',
        staduim: 'img/cairo staduim.jpg',
        matchNumber: 5,
        time: '08:30 PM',
        group: 'African Qualifiers Group B',
        team1: 'Egypt',
        team2: 'Algeria',
        team1Logo: 'img/egypt.svg',
        team2Logo: 'img/algeria.svg',
        isFavorite: true,
        price: 1100,
        word: "🔥 high",
        adv: "⏳ Limited Seats",
        category: '⚽ Football',
        location: 'Cairo, Egypt'
  }

  checkoutTicket: CheckoutTicket[] = [];

  totalPrice: number = 0;

  clientId: string = '';

  async ngOnInit() {

    this.currentUser = this._authService.currentUser;
    this._authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this.route.paramMap.subscribe(params => {
      const newId = Number(params.get('id'));
      this.match = this._sharedService.matches.find(m => m.id === newId);

      if (this.match) {
        this.matchDetails = this.match;
      }
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Match ID:', id);

    this.checkoutTicket = this._sharedService.checkoutTicket;
    this.totalPrice = this.checkoutTicket.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0);

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
          window.location.href = `/profile/bookingHistory`;
        },
        onError: (err: any) => {
          console.error('PayPal Error:', err);
          alert('Payment failed. Please try again.');
        }
      }).render('#paypal-button-container');

    } catch (error) {
      console.error('Error initializing PayPal:', error);
    }
  }

}
