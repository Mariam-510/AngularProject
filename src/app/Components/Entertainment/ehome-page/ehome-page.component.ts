import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ESliderComponent } from "../eslider/eslider.component";

@Component({
  selector: 'app-ehome-page',
  imports: [CommonModule, RouterModule, ESliderComponent],
  templateUrl: './ehome-page.component.html',
  styleUrl: './ehome-page.component.css'
})
export class EHomePageComponent {

  Math = Math;

  events = [
    {
      id:1,
      title: "March Shows",
      date: "February 26th, 2025",
      description: "Immerse yourself in live entertainment with these top shows. Immerse yourself in live entertainment with these top shows.Experience the vibrant streets of 1950s New York like never before.",
      image: "img/7.jpg",
      isFavorite: false
    },
    {
      id:2,
      title: "Why You Should Catch the Queen of Comedy",
      date: "February 20th, 2025",
      description: "Nikki called it 'Ozempic's biggest night,' here's why. Immerse yourself in live entertainment with these top shows. Experience the vibrant streets of 1950s New York like never before.",
      image: "img/8.jpg",
      isFavorite: true
    },
    {
      id:3,
      title: "West Side Story",
      date: "February 19th, 2025",
      description: "Experience the vibrant streets of 1950s New York like never before. Experience the vibrant streets of 1950s New York like never before. Immerse yourself in live entertainment with these top shows",
      image: "img/9.jpg",
      isFavorite: false,
    }
  ];


  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }

  images = [
    "img/16.jpg",
    "img/15.jpg",
    "img/17.jpg"
  ];


  categories = [
    { name: 'All', link: '' },
    { name: 'Concerts', link: 'concerts' },
    { name: 'Theater', link: 'theater' },
    { name: 'Dance', link: 'dance' },
    { name: 'Stand-Up Comedy', link: 'standUpComedy' },
    { name: 'Other', link: 'other' }
  ];



}
