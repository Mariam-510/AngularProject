import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

declare var bootstrap: any;
@Component({
  selector: 'app-shome-page',
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './shome-page.component.html',
  styleUrl: './shome-page.component.css'
})
export class SHomePageComponent {
  categories = [
    {
      image: 'img/EPL_1.jpg',
      title: 'Premier League',
      subtitle: '2024/2025 Season',
      badgeText: 'Home Matches',
      badgeClass: 'bg-primary'
    },
    {
      image: 'img/ECUP.gif',
      title: 'Egypt Cup',
      subtitle: 'Cairo Stadium Matches',
      badgeText: 'Quarterfinals',
      badgeClass: 'bg-success'
    },
    {
      image: 'img/national.jpg',
      title: 'Pharaohs',
      subtitle: 'World Cup Qualifiers',
      badgeText: 'Cairo Venue',
      badgeClass: 'bg-warning'
    },
    {
      image: 'img/derby.jpg',
  title: 'Derby Matches',
  subtitle: 'Egypt’s Biggest Rivalries',
  badgeText: 'Cairo Derby',
  badgeClass: 'bg-danger'
    },
    {
      image: 'img/EPL.jpg',
      title: 'Pharaohs',
      subtitle: 'World Cup Qualifiers',
      badgeText: 'Cairo Venue',
      badgeClass: 'bg-warning'
    }
  ];
  @ViewChild('matchSlider', { static: false }) matchSlider!: ElementRef;
  scrollLeft() {
    if (this.matchSlider) {
      this.matchSlider.nativeElement.scrollBy({ left: -380, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.matchSlider) {
      this.matchSlider.nativeElement.scrollBy({ left: 380, behavior: 'smooth' });
    }
  }
  matches = [
    {
      id:1,
      image: 'img/EPL4.jpg',
      venue: 'Khaled Bichara Stadium, Gouna',
      date: 'Sun 23 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 18,
      time: '08:00 PM',
      group: 'Group Two (Stage)',
      team1: 'El Gouna SC',
      team2: 'Smouha SC',
      staduim:'img/s3.jpg',
      team1Logo: 'img/ElGouna.png',
      team2Logo: 'img/Smouha.png',
      isFavorite: false,
      price: 250, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football'
    },
    {
      id:2,
      image: 'img/EPL4.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'Championship League',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      staduim:'img/s1.jpg',

      team1: 'Al Ahly SC',
      team2: 'Pyramids FC',
      team1Logo: 'img/Al Ahly.svg',
      team2Logo: 'img/Pyramids.png',

      isFavorite: false,
      price: 500, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football'
    },
  
    {
      id:3,
      image: 'img/EPL3.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      staduim:'img/cairo staduim.jpg',
      team1Logo: 'img/zamalekv2.png',
      team2Logo: 'img/ismaily.png',
      isFavorite: true,
      price: 300, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football'
    },
   
   
    {
      id:4,
      image: 'img/EPL4.jpg',
      venue: 'Alexandria Stadium, Alexandria',
      date: 'Tue 25 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 20,
      time: '06:45 PM',
      group: 'Group One (Stage)',
      team1: 'Smouha SC',
      team2: 'Al Ittihad Alexandria SC',
      team1Logo: 'img/Smouha.png',
      team2Logo: 'img/AlIttihad.png',
      isFavorite: false,
      price: 500, // Add price
    },
    {
      id:5,
      image: 'img/EPL4.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      team1: 'Ceramica Cleopatra FC',
      team2: 'Ghazl Elmahala FC',
      team1Logo: 'img/Cleopatra.png',
      team2Logo: 'img/mahalla.png',
      isFavorite: false,
      price: 100, // Add price
    },
    {
      id:6,
      image: 'img/EPL3.jpg',
      venue: 'Cairo International Stadium',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
     

      team2: 'ZED FC',
      team1: 'ENPPI SC',
      team1Logo: 'img/ENPPI.png',
      team2Logo: 'img/ZED.png',
      isFavorite: false,
      price: 290, // Add price
      
    }
  ];

 
  // Filter options
  venues = ['All Venues', ...new Set(this.matches.map(m => m.venue))];
  prices = ['All Prices', ...new Set(this.matches.map(m => m.price))];
  dates = ['All Dates', ...new Set(this.matches.map(m => m.date))];

  // Selected filter values
  selectedVenue = 'All Venues';

  selectedPrice: string = 'All Prices';
  selectedDate: string = 'All Dates';
  
  selectPrice(price: string | number) {
    this.selectedPrice = String(price); // Convert to string
    this.applyFilters();
  }
  
  selectDate(date: string | number) {
    this.selectedDate = String(date); // Convert to string
    this.applyFilters();
  }
  
  filteredMatches = [...this.matches];
  pageSize = 3;
  currentPage = 1;
  pagedMatches: any[] = [];
  pages: number[] = [];

  constructor() {
    this.updatePagination();
    
    
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredMatches.length / this.pageSize);
  }

  private updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedMatches = this.filteredMatches.slice(startIndex, startIndex + this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  applyFilters(): void {
    this.filteredMatches = this.matches.filter(match =>
      (this.selectedVenue === 'All Venues' || match.venue === this.selectedVenue) &&
      (this.selectedPrice === 'All Prices' || match.price === +this.selectedPrice) &&
      (this.selectedDate === 'All Dates' || match.date.toString().trim() === this.selectedDate.trim())
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  toggleFavorite(match: any) {
    match.isFavorite = !match.isFavorite;
  }
  resetFilters() {
    this.selectedVenue = 'All Venues';
    this.selectedPrice = 'All Prices';
    this.selectedDate = 'All Dates';
    this.applyFilters(); // Ensure filters are reapplied after reset
  }
  
}