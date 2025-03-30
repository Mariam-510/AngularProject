import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedService } from '../../../Services/shared.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private _shared: SharedService, private router: Router) { }


  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  confirmDeleteAccount(event: MouseEvent) {
    event.stopPropagation();

    const isConfirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone!");

    if (isConfirmed) {
      this._shared.logout();
      this.router.navigate(['/']);
    }
  }


}
