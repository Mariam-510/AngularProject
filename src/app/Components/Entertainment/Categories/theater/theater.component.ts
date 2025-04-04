import { Component, OnInit } from '@angular/core';
import { SharedService, show } from '../../../../Services/shared.service';
import { ShowComponent } from "../show/show.component";

@Component({
  selector: 'app-theater',
  imports: [ShowComponent],
  templateUrl: './theater.component.html',
  styleUrl: './theater.component.css'
})
export class TheaterComponent implements OnInit {
  shows: show[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.shows = this.sharedService.shows.filter((show: any) => show.category === 'Theater');
  }
}
