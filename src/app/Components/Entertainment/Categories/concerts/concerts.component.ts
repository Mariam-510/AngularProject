import { Component, OnInit } from '@angular/core';
import { ShowComponent } from "../show/show.component";
import { SharedService } from '../../../../Services/shared.service';

@Component({
  selector: 'app-concerts',
  imports: [ShowComponent],
  templateUrl: './concerts.component.html',
  styleUrl: './concerts.component.css'
})
export class ConcertsComponent implements OnInit {
  shows: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.shows = this.sharedService.shows.filter((show: any) => show.category === 'Concerts');
  }
}
