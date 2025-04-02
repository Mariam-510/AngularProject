import { Injectable } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';


@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor() { }

  clientId: string = 'AUaqQlDvhtB5aBRbNeCeNJc0od9OmcgBfiPF2nY89pq9w43wHZ7dilU3eMsFp2oQfN1-BzqDVxK-ASix'

  async loadPayPal(clientId: string) {
    try {
      const paypal = await loadScript({ clientId });
      return paypal;
    } catch (error) {
      console.error('PayPal SDK failed to load:', error);
      return null; // Ensure that we return null if it fails
    }
  }

}
