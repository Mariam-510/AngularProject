import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-match',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-match.component.html',
  styleUrl: './booking-match.component.css'
})
export class BookingMatchComponent {

  constructor(private router: Router) {}

  // Football Data
  teams = {
    homeTeam: {
      name: 'Al Ahly FC',
      logo: 'https://upload.wikimedia.org/wikipedia/ar/8/8c/Al_Ahly_SC_logo.png'
    },
    awayTeam: {
      name: 'Enppi SC',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/22/ENPPI_Club_Logo.png'
    }
  };

  matchDetails = {
    stadium: {
      name: 'Al Salam Stadium',
      image: 'Images/stadiumSeating.jpg',
      location: 'Cairo, Egypt'
    },
    date: '2024-03-20T21:30:00',
    time: '09:30 PM'
  };

  // Ticket Counters
  cat3Counter = signal(0);
  cat2Counter = signal(0);
  cat1Counter = signal(0);
  vipCounter = signal(0);

  // Prices
  cat3Price = 75;
  cat2Price = 150;
  cat1Price = 200;
  vipPrice = 300;

  totalPrice = signal(0);

  // Total Calculations
  updateTotalPrice() {
    this.totalPrice.set(
      (this.cat3Counter() * this.cat3Price) +
      (this.cat2Counter() * this.cat2Price) + 
      (this.cat1Counter() * this.cat1Price) +
      (this.vipCounter() * this.vipPrice)
    );
  }

  isTicketLimitReached(): boolean {
    return this.totalTickets() >= 4;
  }

  totalTickets(): number {
    return (this.cat3Counter() + this.cat2Counter() + this.cat1Counter() + this.vipCounter());
  }

  // Football Ticket Controls
  // Cat 3
  minusCat3() {
    if (this.cat3Counter() > 0) {
      this.cat3Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusCat3() {
    if (!this.isTicketLimitReached()) {
      this.cat3Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  // Cat 2
  minusCat2() {
    if (this.cat2Counter() > 0) {
      this.cat2Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusCat2() {
    if (!this.isTicketLimitReached()) {
      this.cat2Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  // Cat 1
  minusCat1() {
    if (this.cat1Counter() > 0) {
      this.cat1Counter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusCat1() {
    if (!this.isTicketLimitReached()) {
      this.cat1Counter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  // VIP
  minusVip() {
    if (this.vipCounter() > 0) {
      this.vipCounter.update(v => v - 1);
      this.updateTotalPrice();
    }
  }
  plusVip() {
    if (!this.isTicketLimitReached()) {
      this.vipCounter.update(v => v + 1);
      this.updateTotalPrice();
    }
  }

  proceedToCheckout() {
    console.log('Proceeding to checkout...');
    this.router.navigate(['/bookingDetailsMatch']);
  }

}
