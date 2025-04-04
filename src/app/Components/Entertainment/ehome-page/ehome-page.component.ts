import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ESliderComponent } from "../eslider/eslider.component";
import { SharedService, show, ShowCategory } from '../../../Services/shared.service';


@Component({
  selector: 'app-ehome-page',
  imports: [CommonModule, RouterModule, ESliderComponent],
  templateUrl: './ehome-page.component.html',
  styleUrl: './ehome-page.component.css'
})
export class EHomePageComponent implements OnInit {
  events: show[] = [];

  categories: ShowCategory[] = [];

  constructor(private sharedService: SharedService) { }

  parseCustomDate(dateStr: string): number {
    const months: Record<string, number> = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    // Extract parts from "Mar 15 - 2025"
    const parts = dateStr.split(' ');
    const monthKey = parts[0] as keyof typeof months; // Explicit assertion
    const month = months[monthKey]; // Convert "Mar" to 2 (March is index 2)
    const day = parseInt(parts[1]); // Get "15"
    const year = parseInt(parts[3]); // Get "2025"

    return new Date(year, month, day).getTime(); // Return timestamp for sorting
  }


  ngOnInit(): void {
    this.events = this.sharedService.shows;
    this.events = this.events
      .sort((a: show, b: show) => {
        const dateA = this.parseCustomDate(a.date);
        const dateB = this.parseCustomDate(b.date);
        return dateB - dateA; // Ascending order (earliest date first)
      })
      .slice(0, 3); // Take only the first 3

    this.categories = this.sharedService.showCategories;
  }


  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
  }

  images = [
    "img/16.jpg",
    "img/15.jpg",
    "img/17.jpg"
  ];

}
