import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService, show, ShowTicket } from '../../../Services/shared.service';

@Component({
  selector: 'app-booking-event',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-event.component.html',
  styleUrl: './booking-event.component.css'
})
export class BookingEventComponent implements OnInit {

  show: any;
  tickets: ShowTicket[] = [];
  counters = signal<Record<string, number>>({});

  totalPrice = computed(() => {
    return this.tickets.reduce((total, ticket) => 
      total + (this.counters()[ticket.type] || 0) * ticket.price, 0);
  });

  totalTickets = computed(() => 
    Object.values(this.counters()).reduce((sum, count) => sum + count, 0));

  constructor(private router: Router, private _sharedService: SharedService, private route: ActivatedRoute) {}

  showDetails: show =
  {
    id: 1,
    title: 'Cinderella',
    category: 'Dance',
    imageSmall: 'img/Shows/d1.jpg',
    imageLarge: 'img/Shows/d11.jpg',
    rating: 3.5,
    description: `A mesmerizing performance blending ballet and storytelling, Cinderella brings the classic fairytale to life with stunning choreography and enchanting music.`,
    date: 'Jun 12 - 2025',
    location: 'Cairo Opera House',
    fullLocation: 'Cairo, Egypt',
    price: 500,
    isFavorite: false,
    word: 'Enchanting!',
    reviews: 6,
    qoute: "Step into a world of wonder!",
    subQoute: "Experience a fairytale on stage."
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const newId = Number(params.get('id'));
      this.show = this._sharedService.shows.find(s => s.id === newId);

      if (this.show) {
        this.showDetails = this.show;
      }
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Show ID:', id);

    this.tickets = this._sharedService.generateTicketsFromPrice(this.showDetails.price);
    // Initialize counters
    const initialCounters = this.tickets.reduce((acc, ticket) => ({
      ...acc,
      [ticket.type]: 0
    }), {});
    this.counters.set(initialCounters);
  }

  isTicketLimitReached(): boolean {
    return this.totalTickets() >= 4;
  }

  plusTicket(type: string) {
    if (!this.isTicketLimitReached()) {
      this.counters.update(counters => ({
        ...counters,
        [type]: (counters[type] || 0) + 1
      }));
    }
  }

  minusTicket(type: string) {
    this.counters.update(counters => {
      const current = counters[type] || 0;
      return current > 0 ? { ...counters, [type]: current - 1 } : counters;
    });
  }

  getTicketClass(type: string): string {
    const classMap: Record<string, string> = {
      'Economy': 'level-5',
      'Regular': 'level-3',
      'Premium': 'level-4',
      'VIP': 'level-2',
      'Backstage Pass': 'level-1',
    };
    return classMap[type] || '';
  }

  proceedToCheckout() {

    this._sharedService.checkoutTicket = this.tickets.map(ticket => ({
      type: ticket.type,
      quantity: this.counters()[ticket.type],
      price: ticket.price
    }))
    .filter(ticket => ticket.quantity > 0);

    this.router.navigate(['/bookingDetailsEvent', this.showDetails.id]);
  }

}
