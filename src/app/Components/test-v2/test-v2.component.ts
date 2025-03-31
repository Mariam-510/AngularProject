import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test-v2',
  imports: [CommonModule, RouterModule],
  templateUrl: './test-v2.component.html',
  styleUrl: './test-v2.component.css'
})
export class TestV2Component {

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
