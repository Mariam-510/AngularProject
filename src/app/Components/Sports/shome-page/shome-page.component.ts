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
      image: 'img/cairo3.jpg',
      title: 'All Tournaments',
      subtitle: 'View All Matches Across Competitions',
      badgeText: 'All Matches',
      badgeClass: 'bg-dark'
  },
    {
      image: 'img/EPL_1.jpg',
      title: 'EPL 2024/2025',
      subtitle: 'Egypt’s Top-Tier Football League',
      badgeText: 'Home Matches',
      badgeClass: 'bg-primary'
    },
    {
      image: 'img/ECUP.gif',
      title: 'Egypt Cup 2025',
      subtitle: 'Cairo Stadium Matches',
      badgeText: 'Quarterfinals',
      badgeClass: 'bg-success'
    },
    {
      image: 'img/national.jpg',
      title: 'World Cup Qualifiers 2025',
      subtitle: 'Pharaohs',
      badgeText: 'Cairo Venue',
      badgeClass: 'bg-warning'
    },
    {
      image: 'img/derby.jpg',
  title: 'Derby Match',
  subtitle: 'Egypt’s Biggest Rivalries',
  badgeText: 'Cairo Derby',
  badgeClass: 'bg-danger'
    },
    
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
      id: 1,
      image: 'img/cairo staduim.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Fri 28 Mar 2025',
      tournament: 'World Cup Qualifiers 2025',
      staduim:'img/cairo staduim.jpg',
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
      adv:"⏳ Limited Seats",
      category: '⚽ Football'
    },
    
    {
      id:2,
      image: 'img/s1.jpg',
      venue: 'Petro Sport Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'Egypt Cup 2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Quarter Finals',
     
      staduim:'img/s1.jpg',
      team2: 'ZED FC',
      team1: 'ENPPI SC',
      team1Logo: 'img/ENPPI.png',
      team2Logo: 'img/ZED.png',
      isFavorite: false,
      price: 290, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football',
    },
    {
      id:3,
      image: 'img/s3.jpg',
      venue: 'Khaled Bichara Stadium, Gouna',
      date: 'Sun 23 Mar 2025',
      tournament: 'EPL 2024/2025',
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
      id:4,
      image: 'img/m3.jpg',
      venue: 'Alexandria Stadium, Alexandria',
      date: 'Tue 25 Mar 2025',
      tournament: 'Derby Match',
      matchNumber: 20,
      time: '06:45 PM',
      group: 'Quarter Finals',
      team1: 'Al Ittihad Alexandria SC',
      team2: 'Smouha SC',
      team1Logo: 'img/AlIttihad.png',
      team2Logo: 'img/Smouha.png',
      isFavorite: false,
      price: 500, // Add price
      word: "🔥 high",
      adv:"⏳ Limited Seats",
     category: '⚽ Football',
     staduim:'img/m3.jpg',

    },


    {
      id:4,
      image: 'img/cairo3.jpg',
      venue: 'Cairo International Stadium, Cairo', // Corrected venue
      date: 'Sat 22 Mar 2025',
      tournament: 'Championship League',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',

      team1: 'Al Ahly SC',
      team2: 'Pyramids FC',
      team1Logo: 'img/Al Ahly.svg',
      team2Logo: 'img/Pyramids.png',
      
      isFavorite: false,
      price: 500, // Add price
     
    },
    {
      id: 5,
      image: 'img/m4.jpg',
      venue: 'Borg El Arab Stadium, Alexandria',
      date: 'Tue 15 Apr 2025',
      tournament: 'World Cup Qualifiers 2025',
      matchNumber: 7,
      time: '09:00 PM',
      group: 'African Qualifiers Group B',
      team1: 'Egypt',
      team2: 'Nigeria',
      team1Logo: 'img/egypt.svg',
      team2Logo: 'img/nigeria.svg',
      isFavorite: true,
      price: 1200,
      word: "🔥 high",
      adv: "🌍 Must-win Match!",
      category: '🌎 World Cup Qualifiers'
    },
   
    
  
   
    {
      id:7,
      image: 'img/cairo.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL 2024/2025',
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
      id:8,
      image: 'img/m2.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      team1: 'Ismaily SC',
      team2: 'Ghazl Elmahala FC',
      team1Logo: 'img/ismaily.png',
      team2Logo: 'img/mahalla.png',
      isFavorite: false,
      price: 300, // Add price
    },
    {
      id: 9,
      image: 'img/m1.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      team1: 'Ceramica Cleopatra FC',
      team2: 'Zamalek SC',
      team1Logo: 'img/Cleopatra.png',
      team2Logo: 'img/zamalekv2.png',
      isFavorite: false,
      price: 100,
      category: '⚽ Egyptian Premier League'
    },
    {
      id: 10,
      image: 'img/cairo4.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Fri 1 Apr 2025',
      tournament: 'Derby Match',
      matchNumber: 22,
      time: '09:00 PM',
      group: 'Main Stage',
      team1: 'Al Ahly SC',
      team2: 'Zamalek SC',
      team1Logo: 'img/Al Ahly.svg',
      team2Logo: 'img/zamalekv2.png',
      isFavorite: true,
      price: 900,
     
    }
  ];

 
  // Filter options
  venues = ['All Venues', ...new Set(this.matches.map(m => m.venue))];
  prices = [
    'All Prices',
    'Below 300',
    '300 - 600',
    '600 - 1000',
    'Above 1000'
  ];
  
  dates = [
    'All Dates',
    'Most Recent',
    'Least Recent'
  ];

  // Selected filter values
  selectedVenue = 'All Venues';

  selectedPrice: string = 'All Prices';
  selectedDate: string = 'All Dates';
  selectedTournament: string = 'All Tournaments';
  
  selectPrice(priceRange: string) {
    this.selectedPrice = priceRange;
    this.applyFilters();
  }
  
  selectDate(dateFilter: string) {
    this.selectedDate = dateFilter;
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
    this.filteredMatches = this.matches.filter(match =>{
      const matchPrice = match.price;
    
      // Check Tournament
      const tournamentMatch = this.selectedTournament === 'All Tournaments' || match.tournament.includes(this.selectedTournament);
  
      // Check Venue
      const venueMatch = this.selectedVenue === 'All Venues' || match.venue === this.selectedVenue;
  
      // Check Date
   // Convert match date to a JavaScript Date object for proper sorting
   const matchDate = new Date(match.date);  
      // Check Price Range
      let priceMatch = true;
      switch (this.selectedPrice) {
        case 'Below 300':
          priceMatch = matchPrice < 300;
          break;
        case '300 - 600':
          priceMatch = matchPrice >= 300 && matchPrice <= 600;
          break;
        case '600 - 1000':
          priceMatch = matchPrice > 600 && matchPrice <= 1000;
          break;
        case 'Above 1000':
          priceMatch = matchPrice > 1000;
          break;
        default:
          priceMatch = true; // 'All Prices' case
      }
  
      return tournamentMatch && venueMatch &&  priceMatch;
    });
   // Sorting by date if applicable
   if (this.selectedDate === 'Most Recent') {
    this.filteredMatches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (this.selectedDate === 'Least Recent') {
    this.filteredMatches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
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
  filterByCategory(category: any) {
    this.selectedTournament = category.title; // Using category subtitle as tournament filter
    this.applyFilters();
  }
}