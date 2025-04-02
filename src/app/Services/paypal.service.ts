import { Injectable } from '@angular/core';
import { loadScript } from '@paypal/paypal-js';


@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor() { }
  
  clientId: string = 'AZuxIa7n8XCyfxL7XWL5DQVy4Tkdq8nxUJuAxEGRKb_0RNv5ezVH4qJ5Oi6J1v-gjr4UOOLSQ-ghsIF6'

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
