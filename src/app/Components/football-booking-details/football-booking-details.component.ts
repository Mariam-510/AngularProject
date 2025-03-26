import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
}

interface BookingData {
  homeTeam: { name: string; logo: string };
  awayTeam: { name: string; logo: string };
  stadium: { name: string };
  date: Date;
  time: string;
  tickets: Ticket[];
  totalPrice: number;
  buyer: Buyer;
}

@Component({
  selector: 'app-football-booking-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './football-booking-details.component.html',
  styleUrl: './football-booking-details.component.css'
})
export class FootballBookingDetailsComponent implements OnInit {
  @ViewChild('paypalButton', { static: true }) paypalElement!: ElementRef;

  bookingData: BookingData = {
    homeTeam: {
      name: 'Al Ahly FC',
      logo: 'https://upload.wikimedia.org/wikipedia/ar/8/8c/Al_Ahly_SC_logo.png'
    },
    awayTeam: {
      name: 'Enppi SC',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/22/ENPPI_Club_Logo.png'
    },
    stadium: { name: 'Al Salam Stadium' },
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
      phone: '+20 123 456 7890'
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
              description: 'Match Tickets Purchase'
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
      script.src = `https://www.paypal.com/sdk/js?client-id=AbhuBdc9RMYmvHh15roopwWEvAYs35_F69UC2rfmQDeuO9y6iTJeQwdcZI9xpFPqCa6viCsJrqGZdk59&currency=EGP`;
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
    // Implement your payment success logic here
    alert('Payment successful! Your tickets are being processed.');
    // You can navigate to confirmation page here
  }
}
