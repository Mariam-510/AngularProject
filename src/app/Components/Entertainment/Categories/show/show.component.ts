import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../../../Services/shared.service';

export interface show {
  id: number;
  title: string;
  category: string;
  imageSmall: string;
  imageLarge: string;
  rating: number;
  description: string;
  date: string;
  location: string;
  fullLocation: string;
  price: number;
  isFavorite: boolean;
  word: string;
  reviews: number;
  qoute: string;
  subQoute: string;
}

@Component({
  selector: 'app-show',
  imports: [CommonModule, RouterModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit {

  @Input() shows: show[] = [];

  constructor(private sharedService: SharedService) { }


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

  // ngOnInit(): void {
  //   this.shows.sort((a: show, b: show) => {
  //     const dateA = this.parseCustomDate(a.date);
  //     const dateB = this.parseCustomDate(b.date);
  //     return dateA - dateB;
  //   });
  // }

  ngOnInit(): void {
    this.shows.sort((a: show, b: show) => a.title.localeCompare(b.title));
  }


  Math = Math;

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }

  currentPage = 1;
  itemsPerPage = 3;

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.shows.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedEvents() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.shows.slice(start, start + this.itemsPerPage);
  }

  // Change Page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}
