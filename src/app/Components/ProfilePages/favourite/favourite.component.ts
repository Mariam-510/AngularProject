import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ESliderComponent } from '../../Entertainment/eslider/eslider.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourite',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {
  events = [
    {
      title: 'Harry Potter And The Cursed Child',
      image: 'img/13.jpg',
      rating: 4.5,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 21 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 40,
      isFavorite: true,
      category: 'Concerts',
      word: "Popular",
      reviews: 6
    },
    {
      title: 'Rain - A Tribute To The Beatles',
      image: 'img/14.jpg',
      rating: 4,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before.Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 23 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 35,
      isFavorite: true,
      category: 'Theater',
      word: "Trending",
      reviews: 6
    },
    {
      title: 'Life Of Pi',
      image: 'img/12.jpg',
      rating: 3.5,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before.Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 25 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 50,
      isFavorite: true,
      category: 'Dance',
      word: "Must-See",
      reviews: 6
    },
    {
      title: 'The Addams Family',
      image: 'img/18.jpg',
      rating: 3,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before.Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 27 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 37,
      isFavorite: true,
      category: 'Dance',
      word: "Top Pick",
      reviews: 6
    },
    {
      title: 'Harry Potter And The Cursed Child',
      image: 'img/13.jpg',
      rating: 4.5,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before.Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 21 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 40,
      isFavorite: true,
      category: 'Stand-Up Comedy',
      word: "Must-See",
      reviews: 6
    },
    {
      title: 'Rain - A Tribute To The Beatles',
      image: 'img/14.jpg',
      rating: 4,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before.Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 28 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 35,
      isFavorite: true,
      category: 'Other',
      word: "Popular",
      reviews: 6
    },
    {
      title: 'Life Of Pi',
      image: 'img/12.jpg',
      rating: 3.5,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before.Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 20 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 50,
      isFavorite: true,
      category: 'Other',
      word: "Must-See",
      reviews: 6
    },
    {
      title: 'The Addams Family',
      image: 'img/18.jpg',
      rating: 3,
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      date: 'Mar 15 - 2025',
      location: 'Pantages Theater Hollywood',
      price: 37,
      isFavorite: true,
      category: 'Stand-Up Comedy',
      word: "Top Pick",
      reviews: 6
    }
  ];

  //----------------------------------------------------------------------------------------------------------------------
  matches = [

    {
      id: 1,
      image: 'img/EPL3.jpg',
      venue: 'Cairo International Stadium, Cairo',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      team1Logo: 'img/Zamalek.svg',
      team2Logo: 'img/ismaily.png',
      isFavorite: true,
      price: 300, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 2,
      image: 'img/EPL4.jpg',
      venue: 'Ismailia Stadium, Ismailia',
      date: 'Sun 23 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 18,
      time: '08:00 PM',
      group: 'Group Two (Stage)',
      team1: 'Al Ahly SC',
      team2: 'Pyramids FC',
      team1Logo: 'img/Al Ahly.svg',
      team2Logo: 'img/Pyramids.png',
      isFavorite: true,
      price: 250, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },

    {
      id: 3,
      image: 'img/EPL4.jpg',
      venue: 'Alexandria Stadium, Alexandria',
      date: 'Tue 25 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 20,
      time: '06:45 PM',
      group: 'Group One (Stage)',
      team1: 'Smouha SC',
      team2: 'Al Ittihad Alexandria',

      team1Logo: 'img/Smouha.png',
      team2Logo: 'img/AlIttihad.png',
      isFavorite: true,
      price: 500, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 4,
      image: 'img/EPL4.jpg',
      venue: 'Suez Canal Stadium, Ismailia',
      date: 'Sat 22 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 17,
      time: '09:30 PM',
      group: 'Group Two (Stage)',
      team1: 'Ceramica Cleopatra',
      team2: 'Ghazl Elmahala ',
      team1Logo: 'img/Cleopatra.png',
      team2Logo: 'img/mahalla.png',
      isFavorite: true,
      price: 100, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'
    },
    {
      id: 5,
      image: 'img/EPL3.jpg',
      venue: 'Cairo International Stadium',
      date: 'Mon 24 Mar 2025',
      tournament: 'EPL Cup 2024/2025',
      matchNumber: 19,
      time: '07:30 PM',
      group: 'Group One (Stage)',
      team1: 'Zamalek SC',
      team2: 'Ismaily SC',
      team1Logo: 'img/Zamalek.svg',
      team2Logo: 'img/ismaily.png',
      isFavorite: true,
      price: 290, // Add price
      word: "🔥 high",
      adv: "⏳ Limited Seats",
      category: '⚽ Football'

    }
  ];

  // --------------------------------------------------------------------------------------------------------------------
  Math = Math;

  toggleFavoriteEvent(event: any) {
    // Remove event from array when unfavorited
    this.events = this.events.filter(e => e !== event);
  }

  toggleFavoriteMatch(match: any) {
    // Remove match from array when unfavorited
    this.matches = this.matches.filter(m => m !== match);
  }

  // --------------------------------------------------------------------------------------------------------------------
  itemsPerPage = 3;

  currentPageEvent = 1;
  // Calculate the total number of pages
  get totalPagesEvent() {
    return Math.ceil(this.events.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedEvents() {
    const start = (this.currentPageEvent - 1) * this.itemsPerPage;
    return this.events.slice(start, start + this.itemsPerPage);
  }

  changePageEvent(page: number) {
    if (page >= 1 && page <= this.totalPagesEvent) {
      this.currentPageEvent = page;
    }
  }

  currentPageMatch = 1;
  // Calculate the total number of pages
  get totalPagesMatch() {
    return Math.ceil(this.matches.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedMatches() {
    const start = (this.currentPageMatch - 1) * this.itemsPerPage;
    return this.matches.slice(start, start + this.itemsPerPage);
  }

  changePageMatch(page: number) {
    if (page >= 1 && page <= this.totalPagesMatch) {
      this.currentPageMatch = page;
    }
  }

  // --------------------------------------------------------------------------------------------------------------------
  categoryIcons: { [key: string]: string } = {
    'Concerts': '🎵',          // Music Note
    'Theater': '🎭',           // Theater Masks
    'Dance': '💃',             // Dancing Emoji
    'Stand-Up Comedy': '🎤',   // Microphone
    'Other': '✨',             // Sparkles (for other)
  };

  //----------------------------------------------------------------------------------------------------------------------
  shareItem(item: any): void {
    const shareText = `Check out this event: ${item.title} - ${item.description} at ${item.location} on ${item.date}. Price: $${item.price}`;
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: shareText,
        url: window.location.href
      }).then(() => console.log('Shared successfully'))
        .catch(err => console.error('Sharing failed', err));
    } else {
      // Fallback for browsers that don’t support navigator.share
      alert(`Copy and share this: ${shareText}`);
    }
  }


  //----------------------------------------------------------------------------------------------------------------------
  selectedCategory: 'events' | 'matches' = 'events';
  toggleCategory(category: 'events' | 'matches') {
    this.selectedCategory = category;
  }

  toggleCategory1(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectedCategory = isChecked ? 'matches' : 'events';
  }

}
