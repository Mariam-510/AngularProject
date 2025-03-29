import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    {
      title: "The Lion King",
      location: "Broadway Theater",
      rating: 5,
      date: "March 27, 2025",
      comment: "An absolutely stunning performance with breathtaking visuals.An absolutely stunning performance with breathtaking visuals.",
      category: "Shows"
    },
    {
      title: "Al Ahly Sc vs Pyramids FC",
      location: "Ismailia Stadium",
      rating: 5,
      date: "March 20, 2025",
      comment: "A classic international football match! Fantastic game.",
      category: "Sports"
    },
    {
      title: "Phantom of the Opera",
      location: "Her Majesty's Theatre",
      rating: 4,
      date: "March 15, 2025",
      comment: "Amazing music and production. A must-see for theater lovers!",
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
      rating: 5,
      date: "March 5, 2025",
      comment: "Incredible storytelling and performances. Worth every second!",
      category: "Shows"
    },
    {
      title: "Cirque du Soleil: O",
      location: "Bellagio Theater",
      rating: 5,
      date: "February 25, 2025",
      comment: "A mesmerizing show with stunning acrobatics and visuals.",
      category: "Shows"
    },
    {
      title: "Zamalek Sc vs Ismaily Sc",
      location: 'Cairo International Stadium',
      rating: 5,
      date: "February 20, 2025",
      comment: "A classic international football match! Fantastic game.",
      category: "Sports"
    }
  ];

  Math = Math;

  //---------------------------------------------------------------------------------
  selectedCategory: string = 'All';
  filteredReviews = [...this.reviews];

  filterReviews(category: string) {
    this.selectedCategory = category;
    this.filteredReviews = category === 'All' ? this.reviews : this.reviews.filter(r => r.category === category);
  }

  //---------------------------------------------------------------------------------
  isSmallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth < 576; // Adjusts for small screens
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 576;
  }
}
