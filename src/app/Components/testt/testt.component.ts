import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-testt',
  standalone: true,  // Ensure standalone component if used that way
  imports: [RouterOutlet, CommonModule, RouterModule],  // ✅ Import ReactiveFormsModule
  templateUrl: './testt.component.html',
  styleUrl: './testt.component.css'
})
export class TesttComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
