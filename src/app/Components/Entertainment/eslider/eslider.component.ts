import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var bootstrap: any; // Required for Bootstrap modal handling

@Component({
  selector: 'app-eslider',
  imports: [CommonModule, RouterModule],
  templateUrl: './eslider.component.html',
  styleUrl: './eslider.component.css'
})
export class ESliderComponent {
  //Slider
  carouselItems = [
    {
      image: 'img/1.jpg',
      location: 'Ahmanson Theater',
      category: 'Theater',
      title: '& JULIET',
      date: 'August 13 - September 7',
      rating: 4.5,
      description: "It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.",
      isFavorite: false,
      word: "Trending",
      reviews: 6,
      price: 40,
      qoute: "Your Next Adventure Awaits!",
      subQoute: "Book now and be part of something extraordinary."
    },
    {
      image: 'img/2.jpg',
      location: 'Ahmanson Theater',
      category: 'Dance',
      title: '& JULIET',
      date: 'August 13 - September 7',
      rating: 3.5,
      description: "It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.",
      isFavorite: false,
      word: "Must-See",
      reviews: 6,
      price: 50,
      qoute: "Unmissable Experience!",
      subQoute: "Join us for an unforgettable journey."
    },
    {
      image: 'img/3.jpg',
      location: 'Ahmanson Theater',
      category: 'Concerts',
      title: '& JULIET',
      date: 'August 13 - September 7',
      rating: 4,
      description: "It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours.",
      isFavorite: false,
      word: "Top Pick",
      reviews: 6,
      price: 35,
      qoute: "Experience the Magic Live!",
      subQoute: "Don't miss out—secure your tickets today!"
    }
  ];


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
