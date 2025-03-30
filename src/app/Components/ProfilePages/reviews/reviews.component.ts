import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    {
      title: "Phantom of the Opera",
      location: "Her Majesty's Theatre",
      rating: 4,
      date: "March 15, 2025",
      comment: "Amazing music and production. A must-see for theater lovers!",
      category: "Shows"
    },
    {
      title: "The Lion King",
      location: "Broadway Theater",
      rating: 3.5,
      date: "March 27, 2025",
      comment: "An absolutely stunning performance with breathtaking visuals.An absolutely stunning performance with breathtaking visuals.",
      category: "Shows"
    },
    {
      title: "Smouha SC vs Al Ahly Sc",
      location: "Alexandria Stadium",
      rating: 5,
      date: "March 10, 2025",
      comment: "The game was intense! Great atmosphere and thrilling plays.",
      category: "Sports"
    },
    {
      title: "Hamilton",
      location: "Richard Rodgers Theatre",
      rating: 3,
      date: "March 5, 2025",
      comment: "Incredible storytelling and performances. Worth every second!",
      category: "Shows"
    },
    {
      title: "Cirque du Soleil: O",
      location: "Bellagio Theater",
      rating: 4,
      date: "February 25, 2025",
      comment: "A mesmerizing show with stunning acrobatics and visuals.",
      category: "Shows"
    },
    {
      title: "Zamalek Sc vs Ismaily Sc",
      location: 'Cairo International Stadium',
      rating: 4.5,
      date: "February 20, 2025",
      comment: "A classic international football match! Fantastic game.",
      category: "Sports"
    },
    {
      title: "King",
      location: "Broadway Theater",
      rating: 3.5,
      date: "March 27, 2025",
      comment: "An absolutely stunning performance with breathtaking visuals.An absolutely stunning performance with breathtaking visuals.",
      category: "Shows"
    },
  ];

  Math = Math;

  //---------------------------------------------------------------------------------
  selectedCategory: string = 'All';
  filteredReviews = [...this.reviews];

  filterReviews(category: string) {
    this.selectedCategory = category;
    this.filteredReviews = category === 'All' ? this.reviews : this.reviews.filter(r => r.category === category);
  }

  //---------------------------------------------------------------------------------//
  sortOrder: string = 'desc'; // Default sorting order

  sortReviews() {
    this.filteredReviews.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0; // Default to earliest timestamp if missing
      const dateB = b.date ? new Date(b.date).getTime() : 0;

      return this.sortOrder === 'desc'
        ? dateB - dateA // Newest first
        : dateA - dateB; // Oldest first
    });
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    this.sortReviews();
  }

  //---------------------------------------------------------------------------------
  isSmallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth < 576; // Adjusts for small screens
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 576;
    this.sortReviews();
  }

  //---------------------------------------------------------------------------------
  currentPage = 1;
  itemsPerPage = 6;

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.filteredReviews.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedReviews() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredReviews.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }

  }

}
