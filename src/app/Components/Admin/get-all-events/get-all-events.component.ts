import { Component } from '@angular/core';
import { SharedService } from '../../../Services/shared.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  selector: 'app-get-all-events',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './get-all-events.component.html',
  styleUrl: './get-all-events.component.css'
})
export class GetAllEventsComponent {
  events: show[] = [];
  Math = Math;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.events = this.sharedService.shows;
  }

}
