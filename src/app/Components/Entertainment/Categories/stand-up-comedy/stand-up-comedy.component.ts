import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowComponent } from "../show/show.component";

@Component({
  selector: 'app-stand-up-comedy',
  imports: [CommonModule, RouterModule, ShowComponent],
  templateUrl: './stand-up-comedy.component.html',
  styleUrl: './stand-up-comedy.component.css'
})
export class StandUpComedyComponent {
  // events
  eventList = [
    {
      id: 1,
      title: "PAUL SIMON",
      venue: "Ahmanson Theater",
      date: "July 7",
      rating: 5,
      image: "img/8.jpg",
      isFavorite: true

    },
    {
      id: 2,
      title: "Phantom Of The Opera",
      venue: "Ahmanson Theater",
      date: "July 7",
      rating: 3.5,
      image: "img/9.jpg",
      isFavorite: false
    }
  ];
}
