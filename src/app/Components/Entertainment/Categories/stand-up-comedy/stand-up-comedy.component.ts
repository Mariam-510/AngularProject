import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowComponent } from "../show/show.component";
import { SharedService,show } from '../../../../Services/shared.service';

@Component({
  selector: 'app-stand-up-comedy',
  imports: [CommonModule, RouterModule, ShowComponent],
  templateUrl: './stand-up-comedy.component.html',
  styleUrl: './stand-up-comedy.component.css'
})
export class StandUpComedyComponent implements OnInit {
  shows: show[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.shows = this.sharedService.shows.filter((show: any) => show.category === 'Stand-Up Comedy');
  }
}
