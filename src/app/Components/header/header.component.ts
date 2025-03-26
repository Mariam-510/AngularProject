import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchQuery: string = '';
  menuActive: boolean = false;
  userMenuActive: boolean = false;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }

  toggleUserMenu(): void {
    this.userMenuActive = !this.userMenuActive;
  }

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }

  login(event: MouseEvent): void {
    event.stopPropagation();
    console.log('Login clicked');
    // Implement login functionality or navigation here.
    this.userMenuActive = false;
  }

  register(event: MouseEvent): void {
    event.stopPropagation();
    console.log('Register clicked');
    // Implement registration functionality or navigation here.
    this.userMenuActive = false;
  }

}