import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-booking',
  imports: [FormsModule, CommonModule],
  templateUrl: './event-booking.component.html',
  styleUrl: './event-booking.component.css'
})
export class EventBookingComponent {

  // Event Data
  eventDetails = {
    title: 'The Phantom of the Opera',
    image: 'https://africanmusiclibrary.org/_next/image?url=https%3A%2F%2Fd31btwpnsku5px.cloudfront.net%2Fbcd15d9541ae.jpg&w=3840&q=75',
    date: '2024-04-15T19:30:00',
    time: '07:30 PM',
    venue: {
      name: 'Cairo Opera House',
      image: 'Images/eventSeating2.png',
      location: 'Zamalek, Cairo'
    }
  };

  // --- Ticket Counters (signals) ---
  level1Counter = signal(0);
  level2Counter = signal(0);
  level3Counter = signal(0);
  level4Counter = signal(0);
  level5Counter = signal(0);
  // logeCounter   = signal(0);
  // mezzCounter   = signal(0);

  // --- Ticket Prices (example) ---
  level1Price = 2000;
  level2Price = 1500;
  level3Price = 1000;
  level4Price = 750;
  level5Price = 500;
  // logePrice   = 600;
  // mezzPrice   = 400;

  // Total price signal
  totalPrice = signal(0);

  // Function to update the total price
  updateTotalPrice() {
    const total =
      (this.level1Counter() * this.level1Price) +
      (this.level2Counter() * this.level2Price) +
      (this.level3Counter() * this.level3Price) +
      (this.level4Counter() * this.level4Price) +
      (this.level5Counter() * this.level5Price)
      // (this.logeCounter()   * this.logePrice)   +
      // (this.mezzCounter()   * this.mezzPrice);
    this.totalPrice.set(total);
  }

  // Limit the total number of tickets to 4 (if you want to keep that constraint)
  isTicketLimitReached(): boolean {
    return (
      this.level1Counter() +
      this.level2Counter() +
      this.level3Counter() +
      this.level4Counter() +
      this.level5Counter()
      // this.logeCounter()   +
      // this.mezzCounter()
    ) >= 4;
  }

  // Helper to sum all tickets
  totalTickets() {
    return (
      this.level1Counter() +
      this.level2Counter() +
      this.level3Counter() +
      this.level4Counter() +
      this.level5Counter()
      // this.logeCounter()   +
      // this.mezzCounter()
    );
  }

  // ---- Functions for Level 1 ----
  minusLevel1() {
    if (this.level1Counter() > 0) {
      this.level1Counter.update(old => old - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel1() {
    if (!this.isTicketLimitReached()) {
      this.level1Counter.update(old => old + 1);
      this.updateTotalPrice();
    }
  }

  // ---- Functions for Level 2 ----
  minusLevel2() {
    if (this.level2Counter() > 0) {
      this.level2Counter.update(old => old - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel2() {
    if (!this.isTicketLimitReached()) {
      this.level2Counter.update(old => old + 1);
      this.updateTotalPrice();
    }
  }

  // ---- Functions for Level 3 ----
  minusLevel3() {
    if (this.level3Counter() > 0) {
      this.level3Counter.update(old => old - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel3() {
    if (!this.isTicketLimitReached()) {
      this.level3Counter.update(old => old + 1);
      this.updateTotalPrice();
    }
  }

  // ---- Functions for Level 4 ----
  minusLevel4() {
    if (this.level4Counter() > 0) {
      this.level4Counter.update(old => old - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel4() {
    if (!this.isTicketLimitReached()) {
      this.level4Counter.update(old => old + 1);
      this.updateTotalPrice();
    }
  }

  // ---- Functions for Level 5 ----
  minusLevel5() {
    if (this.level5Counter() > 0) {
      this.level5Counter.update(old => old - 1);
      this.updateTotalPrice();
    }
  }
  plusLevel5() {
    if (!this.isTicketLimitReached()) {
      this.level5Counter.update(old => old + 1);
      this.updateTotalPrice();
    }
  }

  // ---- Functions for Loge ----
  // minusLoge() {
  //   if (this.logeCounter() > 0) {
  //     this.logeCounter.update(old => old - 1);
  //     this.updateTotalPrice();
  //   }
  // }
  // plusLoge() {
  //   if (!this.isTicketLimitReached()) {
  //     this.logeCounter.update(old => old + 1);
  //     this.updateTotalPrice();
  //   }
  // }

  // // ---- Functions for Mezz ----
  // minusMezz() {
  //   if (this.mezzCounter() > 0) {
  //     this.mezzCounter.update(old => old - 1);
  //     this.updateTotalPrice();
  //   }
  // }
  // plusMezz() {
  //   if (!this.isTicketLimitReached()) {
  //     this.mezzCounter.update(old => old + 1);
  //     this.updateTotalPrice();
  //   }
  // }

  proceedToCheckout() {
    // Add your checkout logic here
    console.log('Proceeding to checkout...');
  }

}
