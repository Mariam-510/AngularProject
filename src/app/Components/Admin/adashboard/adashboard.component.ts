import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adashboard',
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './adashboard.component.html',
  styleUrl: './adashboard.component.css'
})
export class ADashboardComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
