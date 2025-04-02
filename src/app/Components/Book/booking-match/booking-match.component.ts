import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService, match, ShowTicket } from '../../../Services/shared.service';

@Component({
  selector: 'app-booking-match',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking-match.component.html',
  styleUrl: './booking-match.component.css'
})
export class BookingMatchComponent implements OnInit {

  match: any;
  tickets: ShowTicket[] = [];
  counters = signal<Record<string, number>>({});

  totalPrice = computed(() => {
    return this.tickets.reduce((total, ticket) => 
      total + (this.counters()[ticket.type] || 0) * ticket.price, 0);
  });

  totalTickets = computed(() => 
    Object.values(this.counters()).reduce((sum, count) => sum + count, 0));

  constructor(private router: Router, private _sharedService: SharedService, private route: ActivatedRoute) {}

    matchDetails: match =
    {
      id: 1,
      image: 'img/cairo staduim.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Fri 28 Mar 2025',
      tournament: 'World Cup Qualifiers 2025',
      staduim: 'img/cairo staduim.jpg',
      matchNumber: 5,
      time: '08:30 PM',
      group: 'African Qualifiers Group B',
      team1: 'Egypt',
      team2: 'Algeria',
      team1Logo: 'img/egypt.svg',
      team2Logo: 'img/algeria.svg',
      isFavorite: true,
      price: 1100,
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football',
      location: 'Cairo, Egypt'
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const newId = Number(params.get('id'));
      this.match = this._sharedService.matches.find(m => m.id === newId);

      if (this.match) {
        this.matchDetails = this.match;
      }
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Match ID:', id);

    this.tickets = this._sharedService.generateMatchTicketsFromPrice(this.matchDetails.price);

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
      'VIP': 'vip',
      'CAT 1': 'category-1',
      'CAT 2': 'category-2',
      'CAT 3': 'category-3'
    };
    return classMap[type] || '';
  }

  proceedToCheckout() {
    this.router.navigate(['/bookingDetailsMatch']);
  }

}
