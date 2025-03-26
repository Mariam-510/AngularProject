import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all',
  imports: [CommonModule, RouterModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  // events
  eventList = [
    {
      title: "PAUL SIMON",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 5,
      image: "img/4.jpg",
      isFavorite: true

    },
    {
      title: "Phantom Of The Opera",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 3.5,
      image: "img/10.jpg",
      isFavorite: false
    },
    {
      title: "Umphrey's McGee",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 4,
      image: "img/11.jpg",
      isFavorite: true
    },
    {
      title: "Phantom Of The Operaaaaa",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 3.5,
      image: "img/10.jpg",
      isFavorite: false
    },
    {
      title: "Umphrey's McGeeeee",
      venue: "Ahmanson Theater",
      date: "July 7 - 2025",
      rating: 4,
      image: "img/11.jpg",
      isFavorite: true
    }
  ];

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
