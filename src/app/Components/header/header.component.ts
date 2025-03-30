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

  constructor(private _shared:SharedService, private router: Router) {}

  currentUser: any;

  ngOnInit(): void {
    this.checkMobileView();
    this.currentUser = this._shared.currentUser;
    this._shared.currentUser$.subscribe(user => {
      this.currentUser = user;
      console.log('User state changed:', user); // Debug log
    });
  }

  searchQuery: string = '';
  menuActive: boolean = false;
  userMenuActive: boolean = false;
  isMobile: boolean = false;

  // Detect window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView();
    this.handleResponsiveMenu();
  }

  private checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
  }

  private handleResponsiveMenu() {
    if (!this.isMobile && this.menuActive) {
      this.menuActive = false;
    }
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    // Close user menu when opening main menu
    if (this.menuActive) this.userMenuActive = false;
  }

  toggleUserMenu(): void {
    this.userMenuActive = !this.userMenuActive;
    // Close main menu when opening user menu
    if (this.userMenuActive) this.menuActive = false;
  }

  // Close menus when clicking outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!(event.target as Element).closest('.header-middle') && this.menuActive) {
      this.menuActive = false;
    }
    if (!(event.target as Element).closest('.user-menu-container') && this.userMenuActive) {
      this.userMenuActive = false;
    }
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery.trim());
      // Add your search implementation here
    }
    // Clear search on mobile view
    if (this.isMobile) this.searchQuery = '';
  }
  
  logout(event: MouseEvent) {
    event.stopPropagation();
    this._shared.logout();
    this.userMenuActive = false;
    this.menuActive = false;
    this.router.navigate(['/']); 
  }
}