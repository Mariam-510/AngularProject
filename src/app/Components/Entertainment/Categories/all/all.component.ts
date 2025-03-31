import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowComponent } from '../show/show.component';
import { SharedService } from '../../../../Services/shared.service';


@Component({
  selector: 'app-all',
  imports: [CommonModule, RouterModule, ShowComponent],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit {
  shows: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.shows = this.sharedService.shows;
  }
}
