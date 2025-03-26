import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stand-up-comedy',
  imports: [CommonModule, RouterModule],
  templateUrl: './stand-up-comedy.component.html',
  styleUrl: './stand-up-comedy.component.css'
})
export class StandUpComedyComponent {
  // events
  eventList = [
    {
      title: "PAUL SIMON",
      venue: "Ahmanson Theater",
      date: "July 7",
      rating: 5,
      image: "img/8.jpg",
      isFavorite: true

    },
    {
      title: "Phantom Of The Opera",
      venue: "Ahmanson Theater",
      date: "July 7",
      rating: 3.5,
      image: "img/9.jpg",
      isFavorite: false
    }
  ];

  Math = Math;

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }
}
