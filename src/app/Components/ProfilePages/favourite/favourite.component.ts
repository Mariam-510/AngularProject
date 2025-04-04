import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService, show, match } from '../../../Services/shared.service';
import { ToastrService } from '../../../Services/toastr.service';

@Component({
  selector: 'app-favourite',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent implements OnInit {
  favoriteShows: show[] = [];
  favoriteMatches: match[] = [];

  constructor(private sharedService: SharedService, private toastr: ToastrService) { }
  ngOnInit() {
    this.favoriteShows = this.sharedService.shows.filter(show => show.isFavorite);

    this.favoriteMatches = this.sharedService.matches.filter(match => match.isFavorite);;

  }

  // --------------------------------------------------------------------------------------------------------------------
  Math = Math;

  //----------------------------------------------------------------------------------------------------------------------
  selectedCategory: 'events' | 'matches' = 'events';
  toggleCategory(category: 'events' | 'matches') {
    this.selectedCategory = category;
  }

  toggleCategory1(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectedCategory = isChecked ? 'matches' : 'events';
  }

  // --------------------------------------------------------------------------------------------------------------------
  itemsPerPage = 3;

  currentPageEvent = 1;
  e: any;
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

  // --------------------------------------------------------------------------------------------------------------------
  currentPageMatch = 1;
  // Calculate the total number of pages
  get totalPagesMatch() {
    return Math.ceil(this.favoriteMatches.length / this.itemsPerPage);
  }

  // Get paginated events
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
  shareEvent(item: any): void {
    const shareText = `Check out this event: ${item.title} - ${item.description} at ${item.location} on ${item.date}. Price: $${item.price}`;
    const baseUrl = window.location.origin; // Gets the host URL (e.g., http://localhost:4200)
    const shareUrl = `${baseUrl}/shows/${item.id}`; // Combine the host URL with the item's ID

    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: shareText,
        url: shareUrl // Use the dynamic URL
      }).then(() => console.log('Shared successfully'))
        .catch(err => console.error('Sharing failed', err));
    } else {
      // Fallback for browsers that don’t support navigator.share
      this.toastr.info(`Copy and share this: ${shareText}`);
    }
  }


  shareMatch(item: any): void {
    const shareText = `Check out this event: ${item.title} - ${item.description} at ${item.location} on ${item.date}. Price: $${item.price}`;
    const baseUrl = window.location.origin; // Gets the host URL (e.g., http://localhost:4200)
    const shareUrl = `${baseUrl}/sports/${item.id}`; // Combine the host URL with the item's ID

    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: shareText,
        url: shareUrl // Use the dynamic URL
      }).then(() => console.log('Shared successfully'))
        .catch(err => console.error('Sharing failed', err));
    } else {
      // Fallback for browsers that don’t support navigator.share
      this.toastr.info(`Copy and share this: ${shareText}`);
    }
  }



  //----------------------------------------------------------------------------------------------------------------------

  toggleFavoriteEvent(event: any) {
    event.isFavorite = !event.isFavorite;
    this.favoriteShows = this.favoriteShows.filter(e => e !== event);
  }

  //----------------------------------------------------------------------------------------------------------------------
  toggleFavoriteMatch(match: any) {
    match.isFavorite = !match.isFavorite;
    this.favoriteMatches = this.favoriteMatches.filter(m => m !== match);
  }


}
