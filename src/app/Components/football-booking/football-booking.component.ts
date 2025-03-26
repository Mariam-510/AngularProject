import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-football-booking',
  imports: [FormsModule, CommonModule],
  templateUrl: './football-booking.component.html',
  styleUrl: './football-booking.component.css'
})
export class FootballBookingComponent {

  // Teams Data
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

  // Match Details
  matchDetails = {
    stadium: {
      name: 'Al Salam Stadium',
      image: 'Images/stadiumSeating.jpg',
      location: 'Cairo, Egypt'
    },
    date: '2024-03-20T21:30:00', // ISO format for date
    time: '09:30 PM'
  };

  // Signals for each category
  cat3Counter = signal(0);
  cat2Counter = signal(0);
  cat1Counter = signal(0);
  vipCounter = signal(0);

  // Prices for each category
  cat3Price = 75;
  cat2Price = 150;
  cat1Price = 200;
  vipPrice = 300;

  // Total price signal
  totalPrice = signal(0);

  // Function to update the total price
  updateTotalPrice() {
    const total = (this.cat3Counter() * this.cat3Price) +
                  (this.cat2Counter() * this.cat2Price) + 
                  (this.cat1Counter() * this.cat1Price) +
                  (this.vipCounter() * this.vipPrice);
    this.totalPrice.set(total);
  }

  // Function to check if the total tickets exceed 4
  isTicketLimitReached(): boolean {
    return (this.cat3Counter() + this.cat2Counter() + this.cat1Counter() + this.vipCounter()) >= 4;
  }

  // Functions for Cat 3
  minusCat3() {
    if (this.cat3Counter() > 0) {
      this.cat3Counter.update(oldVal => oldVal - 1);
      this.updateTotalPrice();
    }
  }

  plusCat3() {
    if (!this.isTicketLimitReached()) {
      this.cat3Counter.update(oldVal => oldVal + 1);
      this.updateTotalPrice();
    }
  }

  // Functions for Cat 2
  minusCat2() {
    if (this.cat2Counter() > 0) {
      this.cat2Counter.update(oldVal => oldVal - 1);
      this.updateTotalPrice();
    }
  }

  plusCat2() {
    if (!this.isTicketLimitReached()) {
      this.cat2Counter.update(oldVal => oldVal + 1);
      this.updateTotalPrice();
    }
  }

  // Functions for Cat 1
  minusCat1() {
    if (this.cat1Counter() > 0) {
      this.cat1Counter.update(oldVal => oldVal - 1);
      this.updateTotalPrice();
    }
  }

  plusCat1() {
    if (!this.isTicketLimitReached()) {
      this.cat1Counter.update(oldVal => oldVal + 1);
      this.updateTotalPrice();
    }
  }

  // Functions for VIP
  minusVip() {
    if (this.vipCounter() > 0) {
      this.vipCounter.update(oldVal => oldVal - 1);
      this.updateTotalPrice();
    }
  }

  plusVip() {
    if (!this.isTicketLimitReached()) {
      this.vipCounter.update(oldVal => oldVal + 1);
      this.updateTotalPrice();
    }
  }

  totalTickets() {
    return (
      this.cat3Counter() +
      this.cat2Counter() +
      this.cat1Counter() +
      this.vipCounter()
    );
  }

  proceedToCheckout() {
    // Add your checkout logic here
    console.log('Proceeding to checkout...');
    // Example: Navigate to a checkout page
    // this.router.navigate(['/checkout']);
  }
}