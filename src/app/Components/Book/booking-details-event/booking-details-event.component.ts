import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
export class BookingDetailsEventComponent {
  @ViewChild('paypalButton', { static: true }) paypalElement!: ElementRef;

  // eventImage: 'https://africanmusiclibrary.org/_next/image?url=https%3A%2F%2Fd31btwpnsku5px.cloudfront.net%2Fbcd15d9541ae.jpg&w=3840&q=75',
  
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

    ngOnInit() {
      this.loadPaypalScript().then(() => {
      paypal.Buttons({
      createOrder: (data: any, actions: any) => {
      return actions.order.create({
      purchase_units: [{
      amount: {
      value: this.bookingData.totalPrice.toFixed(2),
      currency_code: 'EGP'
      },
      description: 'Event Tickets Purchase'
      }]
      });
      },
      onApprove: async (data: any, actions: any) => {
      const order = await actions.order.capture();
      this.handlePaymentSuccess(order);
      },
      onError: (err: any) => {
      console.error('PayPal Error:', err);
      alert('Payment failed. Please try again.');
      }
      }).render(this.paypalElement.nativeElement);
      });
      }
      
      private loadPaypalScript(): Promise<void> {
      return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https:www.paypal.com/sdk/js?client-id=AbhuBdc9RMYmvHh15roopwWEvAYs35_F69UC2rfmQDeuO9y6iTJeQwdcZI9xpFPqCa6viCsJrqGZdk59&currency=EGP`;
      script.onload = () => resolve();
      script.onerror = (error) => {
      console.error('Failed to load PayPal SDK:', error);
      reject(error);
      alert('Failed to load payment processor. Please refresh the page.');
      };
      document.head.appendChild(script);
      });
      }
      
      private handlePaymentSuccess(order: any) {
      console.log('Payment Completed:', order);
      alert('Payment successful! Your tickets are being processed.');
      // Add navigation logic here
      }

}
