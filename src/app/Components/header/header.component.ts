import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../Services/shared.service';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private _shared: SharedService, private router: Router) {}

  // Component State
  currentUser: any;
  searchQuery: string = '';
  menuActive: boolean = false;
  userMenuActive: boolean = false;
  isMobile: boolean = false;

  ngOnInit(): void {
    this.checkMobileView();
    this.currentUser = this._shared.currentUser;
    this._shared.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  // Handle window resize
  @HostListener('window:resize')
  checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuActive = false; // Auto-close hamburger menu on desktop
    }
  }

  // Toggle hamburger menu
  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuActive = !this.menuActive;
    if (this.menuActive) {
      this.userMenuActive = false;
    }
  }

  // Toggle user menu
  toggleUserMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.userMenuActive = !this.userMenuActive;
    if (this.userMenuActive) {
      this.menuActive = false;
    }
  }

  // Close menus when clicking outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    // Check if we clicked outside both menus
    if (target.closest('.header-middle') || target.closest('.hamburger')) {
      return;
    }
    
    this.menuActive = false;
    this.userMenuActive = false;
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      // Search implementation
    }
    if (this.isMobile) this.searchQuery = '';
  }
  
  logout(event: MouseEvent): void {
    event.stopPropagation();
    this._shared.logout();
    this.userMenuActive = false;
    this.menuActive = false;
    this.router.navigate(['/']);
  }
}
