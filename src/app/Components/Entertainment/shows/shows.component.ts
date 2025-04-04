import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ESliderComponent } from "../eslider/eslider.component";
import { RouterModule } from '@angular/router';
import { SharedService, show, ShowCategory } from '../../../Services/shared.service';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule, FormsModule, ESliderComponent, RouterModule],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css'
})
export class ShowsComponent implements OnInit {

  isGridView = false;
  searchTerm = '';
  sortBy = '';
  selectedCategory = 'All';
  categories: ShowCategory[] = [];

  events: show[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.events = this.sharedService.shows;
    this.applyFilters();

    this.categories = this.sharedService.showCategories;
  }

  filteredEvents: show[] = [];

  applyFilters(): void {
    let filtered = this.events.filter(event =>
      event.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.selectedCategory != 'All') {
      filtered = filtered.filter(event => event.category === this.selectedCategory);
    }

    filtered.sort((a, b) => {
      if (this.sortBy.includes('Date') || this.sortBy === '') {
        const dateA = this.parseCustomDate(a.date);
        const dateB = this.parseCustomDate(b.date);
        return this.sortBy === 'Date [Earliest]' ? dateA - dateB : dateB - dateA;
      }
      if (this.sortBy === '[A-Z]') return a.title.localeCompare(b.title);
      if (this.sortBy === '[Z-A]') return b.title.localeCompare(a.title);
      if (this.sortBy === 'Rating [Lowest]') return a.rating - b.rating;
      if (this.sortBy === 'Rating [Highest]') return b.rating - a.rating;
      if (this.sortBy === 'Price [Lowest]') return a.price - b.price;
      if (this.sortBy === 'Price [Highest]') return b.price - a.price;

      return 0;
    });

    this.filteredEvents = filtered;
    this.currentPage = 1; // Reset to first page when filters change
  }


  parseCustomDate(dateStr: string): number {
    const months: Record<string, number> = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    // Extract parts from "Mar 15 - 2025"
    const parts = dateStr.split(' ');
    const monthKey = parts[0] as keyof typeof months; // Explicit assertion
    const month = months[monthKey]; // Convert "Mar" to 2 (March is index 2)
    const day = parseInt(parts[1]); // Get "15"
    const year = parseInt(parts[3]); // Get "2025"

    return new Date(year, month, day).getTime(); // Return timestamp for sorting
  }


  clearSearch(): void {
    this.searchTerm = '';
    this.applyFilters();
  }


  toggleView(isGrid: boolean): void {
    this.isGridView = isGrid;
  }

  Math = Math;

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }


  currentPage = 1;
  itemsPerPage = 4;

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.filteredEvents.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedEvents() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEvents.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}
