import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { SharedService } from '../../../Services/shared.service';

export interface match {
  id: number;
  image: string;
  venue: string;
  date: string;
  tournament: string;
  staduim?: string;
  matchNumber: number;
  time: string;
  group: string;
  team1: string;
  team2: string;
  team1Logo: string;
  team2Logo: string;
  isFavorite: boolean;
  price: number;
  word?: string;
  adv?: string;
  category: string;
}

export interface categories {
  image: string;
  title: string;
  subtitle: string;
  badgeText: string;
  badgeClass: string;
}

declare var bootstrap: any;
@Component({
  selector: 'app-shome-page',
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './shome-page.component.html',
  styleUrl: './shome-page.component.css'
})
export class SHomePageComponent implements OnInit {
  matches: match[] = [];
  categories: categories[] = [];
  venues: string[] = [];
  prices: string[] = [];
  dates: string[] = [];

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    this.matches = this._sharedService.matches;
    this.categories = this._sharedService.categories;
    this.filteredMatches = this.matches;
    this.venues = this._sharedService.venues;
    this.prices = this._sharedService.prices;
    this.dates = this._sharedService.dates;
    this.updatePagination();
  }
  
  // Selected filter values
  selectedVenue = 'All Venues';
  selectedPrice: string = 'All Prices';
  selectedDate: string = 'All Dates';
  selectedTournament: string = 'All Tournaments';

  @ViewChild('matchSlider', { static: false }) matchSlider!: ElementRef;
  
  filteredMatches = [...this.matches];
  pageSize = 3;
  currentPage = 1;
  pagedMatches: any[] = [];
  pages: number[] = [];

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

  selectPrice(priceRange: string) {
    this.selectedPrice = priceRange;
    this.applyFilters();
  }
  
  selectDate(dateFilter: string) {
    this.selectedDate = dateFilter;
    this.applyFilters();
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