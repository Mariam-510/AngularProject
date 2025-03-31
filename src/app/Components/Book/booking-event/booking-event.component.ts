import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-event',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-event.component.html',
  styleUrl: './booking-event.component.css'
})
export class BookingEventComponent {

  constructor(private router: Router) {}

  // Event Data
  eventDetails = {
    title: 'The Phantom of the Opera',
    image: 'img/3.jpg',
    date: '2024-04-15T19:30:00',
    time: '07:30 PM',
    venue: {
      name: 'Cairo Opera House',
      image: 'Images/eventSeating.png',
      location: 'Zamalek, Cairo'
    }
  };

  // Ticket Counters
  level1Counter = signal(0);
  level2Counter = signal(0);
  level3Counter = signal(0);
  level4Counter = signal(0);
  level5Counter = signal(0);

  // Prices
  level1Price = 2000;
  level2Price = 1500;
  level3Price = 1000;
  level4Price = 750;
  level5Price = 500;

  totalPrice = signal(0);

  // Total Calculations
  updateTotalPrice() {
    this.totalPrice.set(
      (this.level1Counter() * this.level1Price) +
      (this.level2Counter() * this.level2Price) +
      (this.level3Counter() * this.level3Price) +
      (this.level4Counter() * this.level4Price) +
      (this.level5Counter() * this.level5Price)
    );
  }

  isTicketLimitReached(): boolean {
    return this.totalTickets() >= 4;
  }

  totalTickets(): number {
    return (this.level1Counter() + this.level2Counter() + this.level3Counter() + this.level4Counter() + this.level5Counter());
  }

  // Event Ticket Controls
  // Level 1
  minusLevel1() {
    if (this.level1Counter() > 0) {
      this.level1Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel1() {
    if (!this.isTicketLimitReached()) {
      this.level1Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  // Level 2
  minusLevel2() {
    if (this.level2Counter() > 0) {
      this.level2Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel2() {
    if (!this.isTicketLimitReached()) {
      this.level2Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  // Level 3
  minusLevel3() {
    if (this.level3Counter() > 0) {
      this.level3Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel3() {
    if (!this.isTicketLimitReached()) {
      this.level3Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  // Level 4
  minusLevel4() {
    if (this.level4Counter() > 0) {
      this.level4Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel4() {
    if (!this.isTicketLimitReached()) {
      this.level4Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  // Level 5
  minusLevel5() {
    if (this.level5Counter() > 0) {
      this.level5Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel5() {
    if (!this.isTicketLimitReached()) {
      this.level5Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  proceedToCheckout() {
    console.log('Proceeding to checkout...');
    this.router.navigate(['/bookingDetailsEvent']);
  }

}
