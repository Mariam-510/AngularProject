import { Component, Input, OnInit } from '@angular/core';
import { PaypalService } from '../../Services/paypal.service';

@Component({
  selector: 'app-testt',
  templateUrl: './testt.component.html',
  styleUrls: ['./testt.component.css']
})
export class TesttComponent implements OnInit {
  // @Input() totalPrice!: number;
  // @Input() clientId!: string;

  totalPrice: number = 50;
  clientId: string = 'AUaqQlDvhtB5aBRbNeCeNJc0od9OmcgBfiPF2nY89pq9w43wHZ7dilU3eMsFp2oQfN1-BzqDVxK-ASix'

  constructor(private payPalService: PaypalService) { }

  async ngOnInit() {
    try {
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
