import { Component, OnInit } from '@angular/core';
import { SharedService, show } from '../../../../Services/shared.service';
import { ShowComponent } from "../show/show.component";

@Component({
  selector: 'app-dance',
  imports: [ShowComponent],
  templateUrl: './dance.component.html',
  styleUrl: './dance.component.css'
})
export class DanceComponent implements OnInit {
  shows: show[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.shows = this.sharedService.shows.filter((show: any) => show.category === 'Dance');
  }
}
