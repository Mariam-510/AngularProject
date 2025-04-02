import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ESliderComponent } from '../../Entertainment/eslider/eslider.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../Services/shared.service';

@Component({
  selector: 'app-favourite',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent implements OnInit {
  favoriteShows: any[] = [];
  favoriteMatches:any[]=[];
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.favoriteShows = this.sharedService.getFavoriteShows();

    // Subscribe to BehaviorSubject to update favorites dynamically
    this.sharedService.favoriteShows$.subscribe(favorites => {
      this.favoriteShows = favorites;
    });

    this.favoriteMatches = this.sharedService.getFavoriteMatches();

    // Subscribe to BehaviorSubject to update favorites dynamically
    this.sharedService.favoriteMatches$.subscribe(favorites => {
      this.favoriteMatches = favorites;
    });
    
  }
  removeFavorite(showId: number) {
    const show = this.favoriteShows.find((event) => event.id === showId);
    if (show) {
      this.sharedService.toggleFavorite(show);
    }
  }
  //----------------------------------------------------------------------------------------------------------------------
  

  // --------------------------------------------------------------------------------------------------------------------
  Math = Math;

 

  toggleFavoriteMatch(match: any) {
    match.isFavorite=!match.isFavorite;
    // Remove match from array when unfavorited
    if (!match.isFavorite) {
      this.favoriteMatches = this.favoriteMatches.filter(m => m !== match);
    }
  }

  // --------------------------------------------------------------------------------------------------------------------
  itemsPerPage = 3;

  currentPageEvent = 1;
  // Calculate the total number of pages
  get totalPagesEvent() {
    return Math.ceil(this.favoriteShows.length / this.itemsPerPage);
  }

  // Get paginated events
  get paginatedEvents() {
    let start = (this.currentPageEvent - 1) * this.itemsPerPage;
    if (this.favoriteShows.slice(start, start + this.itemsPerPage).length == 0) {
      this.changePageEvent(1);
      start = 0;
    }
    return this.favoriteShows.slice(start, start + this.itemsPerPage);
  }

  changePageEvent(page: number) {
    if (page >= 1 && page <= this.totalPagesEvent) {
      this.currentPageEvent = page;
    }
  }

  currentPageMatch = 1;
  // Calculate the total number of pages
  get totalPagesMatch() {

    return Math.ceil(this.favoriteMatches.length / this.itemsPerPage);
  }

  // Get paginated events
  // let start = (this.currentPageEvent - 1) * this.itemsPerPage;
  //   if (this.favoriteShows.slice(start, start + this.itemsPerPage).length == 0) {
  //     this.changePageEvent(1);
  //     start = 0;
  //   }
  //   return this.favoriteShows.slice(start, start + this.itemsPerPage);
  get paginatedMatches() {
    let start = (this.currentPageMatch - 1) * this.itemsPerPage;

    if (this.favoriteMatches.slice(start, start + this.itemsPerPage).length == 0) {
      this.changePageMatch(1);
      start = 0;
    }
    return this.favoriteMatches.slice(start, start + this.itemsPerPage);


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
  toggleFavoriteEvent(event: any) {
    event.isFavorite = !event.isFavorite;
    if (!event.isFavorite) {
      this.favoriteShows = this.favoriteShows.filter(e => e !== event);
    }
  }
}
