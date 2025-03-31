import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../../Services/shared.service';

declare var bootstrap: any; // Required for Bootstrap modal handling

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
  selector: 'app-eslider',
  imports: [CommonModule, RouterModule],
  templateUrl: './eslider.component.html',
  styleUrl: './eslider.component.css'
})
export class ESliderComponent implements OnInit {
  carouselItems: show[] = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.carouselItems = this.sharedService.shows
      .sort((a: show, b: show) => b.rating - a.rating) // Sort by rating (descending)
      .slice(0, 3); // Take only the top 3 highest-rated
  }



  Math = Math;

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }


  // ----------------------------------------------------------------------------------

  categoryIcons: { [key: string]: string } = {
    'Concerts': '🎵',          // Music Note
    'Theater': '🎭',           // Theater Masks
    'Dance': '💃',             // Dancing Emoji
    'Stand-Up Comedy': '🎤',   // Microphone
    'Other': '✨',             // Sparkles (for other)
  };


}
