import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  currentUser: any;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this._authService.currentUser;
    this._authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}
