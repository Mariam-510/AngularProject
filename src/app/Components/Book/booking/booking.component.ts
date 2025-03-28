import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type EventType = 'football' | 'concert' | 'cinema' | 'theater';

@Component({
  selector: 'app-booking',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  @Input() eventType: EventType = 'football';

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

  // image: 'https://africanmusiclibrary.org/_next/image?url=https%3A%2F%2Fd31btwpnsku5px.cloudfront.net%2Fbcd15d9541ae.jpg&w=3840&q=75',

  // Event Data
  eventDetails = {
    title: 'The Phantom of the Opera',
    image: 'img/3.jpg',
    date: '2024-04-15T19:30:00',
    time: '07:30 PM',
    venue: {
      name: 'Cairo Opera House',
      image: 'Images/eventSeating2.png',
      location: 'Zamalek, Cairo'
    }
  };

  // Ticket Counters
  // Football
  cat3Counter = signal(0);
  cat2Counter = signal(0);
  cat1Counter = signal(0);
  vipCounter = signal(0);
  
  // Event
  level1Counter = signal(0);
  level2Counter = signal(0);
  level3Counter = signal(0);
  level4Counter = signal(0);
  level5Counter = signal(0);

  // Prices
  // Football
  cat3Price = 75;
  cat2Price = 150;
  cat1Price = 200;
  vipPrice = 300;
  
  // Event
  level1Price = 2000;
  level2Price = 1500;
  level3Price = 1000;
  level4Price = 750;
  level5Price = 500;

  // Shared
  totalPrice = signal(0);

  get isFootball(): boolean {
    return this.eventType === 'football';
  }

  // Total Calculations
  updateTotalPrice() {
    if (this.isFootball) {
      this.totalPrice.set(
        (this.cat3Counter() * this.cat3Price) +
        (this.cat2Counter() * this.cat2Price) + 
        (this.cat1Counter() * this.cat1Price) +
        (this.vipCounter() * this.vipPrice)
      );
    } else {
      this.totalPrice.set(
        (this.level1Counter() * this.level1Price) +
        (this.level2Counter() * this.level2Price) +
        (this.level3Counter() * this.level3Price) +
        (this.level4Counter() * this.level4Price) +
        (this.level5Counter() * this.level5Price)
      );
    }
  }

  isTicketLimitReached(): boolean {
    return this.totalTickets() >= 4;
  }

  totalTickets(): number {
    return this.isFootball ? 
      (this.cat3Counter() + this.cat2Counter() + this.cat1Counter() + this.vipCounter()) :
      (this.level1Counter() + this.level2Counter() + this.level3Counter() + 
       this.level4Counter() + this.level5Counter());
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
  }

}
