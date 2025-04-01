import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
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

interface Venue {
  name: string;
  location: string;
}

interface BookingData {
  title: string;
  eventImage: string;
  venue: Venue;
  date: Date;
  time: string;
  tickets: Ticket[];
  totalPrice: number;
  buyer: Buyer;
}

@Component({
  selector: 'app-booking-details-event',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-details-event.component.html',
  styleUrl: './booking-details-event.component.css'
})
export class BookingDetailsEventComponent implements OnInit {

  bookingData: BookingData = {
    title: 'The Phantom of the Opera',
    eventImage: 'img/3.jpg',
    venue: {
      name: 'Cairo Opera House',
      location: 'Zamalek, Cairo'
    },
    date: new Date('2024-04-15'),
    time: '19:30',
    tickets: [
      { category: 'Level 1', quantity: 2, price: 2000 },
      { category: 'Level 3', quantity: 1, price: 1000 }
    ],
    totalPrice: 5000,
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
