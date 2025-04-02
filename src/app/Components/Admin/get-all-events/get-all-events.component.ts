import { Component } from '@angular/core';
import { SharedService } from '../../../Services/shared.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  selector: 'app-get-all-events',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './get-all-events.component.html',
  styleUrl: './get-all-events.component.css'
})
export class GetAllEventsComponent {
  events: show[] = [];
  Math = Math;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.events = this.sharedService.shows;
  }

  currentPage = 1;
  itemsPerPage = 5;

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.events.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedEvents() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.events.slice(start, start + this.itemsPerPage);
  }

  // Change Page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
