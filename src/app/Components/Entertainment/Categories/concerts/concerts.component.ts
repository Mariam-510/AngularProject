import { Component } from '@angular/core';
import { ShowComponent } from "../show/show.component";

@Component({
  selector: 'app-concerts',
  imports: [ShowComponent],
  templateUrl: './concerts.component.html',
  styleUrl: './concerts.component.css'
})
export class ConcertsComponent {
  eventList = [];
}
