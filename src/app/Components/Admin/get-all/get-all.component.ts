import { Component } from '@angular/core';
import { SharedService } from '../../../Services/shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  selector: 'app-get-all',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent {
 events: show[] = [];
 Math= Math;
 
   constructor(private sharedService: SharedService) { }
 
   ngOnInit(): void {
     this.events = this.sharedService.shows;
   }

 
 
}
