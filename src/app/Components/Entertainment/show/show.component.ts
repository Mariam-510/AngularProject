import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show',
  imports: [CommonModule, RouterModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  @Input() eventList: any;

  Math = Math;

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }

  currentPage = 1;
  itemsPerPage = 3;

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.eventList.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedEvents() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.eventList.slice(start, start + this.itemsPerPage);
  }

  // Change Page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}
