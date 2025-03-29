import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private currentUserSubject = new BehaviorSubject<any>(null);
  
  // Mock user data
  private mockUser = {
    name: 'John Doe',
    email: 'john@test.com',
    password: 'Test@123',
    avatar: 'https://cdn-images.dzcdn.net/images/artist/9155cd2d5f6d81887bde3ad2d6ee26f9/1900x1900-000000-80-0-0.jpg'
  };

  currentUser$ = this.currentUserSubject.asObservable();

  login(email: string, password: string) : boolean {
    if (email === this.mockUser.email && password === this.mockUser.password) {
      this.currentUserSubject.next(this.mockUser);
      return true;
    }
    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  get currentUser() {
    return this.currentUserSubject.value;
  }
}
