import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testt',
  imports: [CommonModule, RouterModule],
  templateUrl: './testt.component.html',
  styleUrl: './testt.component.css'
})
export class TesttComponent {

  //Slider
  carouselItems = [
    {
      image: 'img/1.jpg',
      location: 'Ahmanson Theater',
      category: 'Theater',
      title: '& JULIET',
      date: 'August 13 - September 7',
      rating: 4.5,
      description: "It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours."
    },
    {
      image: 'img/2.jpg',
      location: 'Ahmanson Theater',
      category: 'Dance',
      title: '& JULIET',
      date: 'August 13 - September 7',
      rating: 3.5,
      description: "It's not going to win Nobel prizes or Pulitzers, but it will keep you entertained for two and a half hours."
    },
    {
      image: 'img/3.jpg',
      location: 'Ahmanson Theater',
      category: 'Theater',
      title: '& JULIET',
      date: 'August 13 - September 7',
      rating: 4,
      description: "It's not going to win Nobel prizes or Pulitzers."
    }
  ];

  Math = Math;
}
