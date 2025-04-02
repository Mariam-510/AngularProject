import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaypalService } from '../../../Services/paypal.service';

declare var paypal: any;

interface Ticket {
  category: string;
  quantity: number;
  price: number;
}

interface Buyer {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

interface BookingData {
  homeTeam: { name: string; logo: string };
  awayTeam: { name: string; logo: string };
  stadium: { name: string; location: string };
  date: Date;
  time: string;
  tickets: Ticket[];
  totalPrice: number;
  buyer: Buyer;
}

@Component({
  selector: 'app-booking-details-match',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-details-match.component.html',
  styleUrl: './booking-details-match.component.css'
})
export class BookingDetailsMatchComponent implements OnInit {
  bookingData: BookingData = {
    homeTeam: {
      name: 'Al Ahly FC',
      logo: 'https://upload.wikimedia.org/wikipedia/ar/8/8c/Al_Ahly_SC_logo.png'
    },
    awayTeam: {
      name: 'Enppi SC',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/22/ENPPI_Club_Logo.png'
    },
    stadium: { name: 'Al Salam Stadium', location: 'Cairo, Egypt' },
    date: new Date('2025-03-20'),
    time: '21:30',
    tickets: [
      { category: 'VIP', quantity: 2, price: 1500 },
      { category: 'CAT 1', quantity: 1, price: 800 }
    ],
    totalPrice: 3800,
    buyer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+20 123 456 7890',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    }
  };

  constructor(private payPalService: PaypalService) { }

  totalPrice: number = this.bookingData.totalPrice;
  clientId: string = '';

  async ngOnInit() {
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
