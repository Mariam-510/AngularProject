import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly router = inject(Router);

  // Unified user state (using both Signal and Observable)
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser = signal<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  // Mock user data
  public mockUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    password: 'John@123',
    phoneNum: '01140558309',
    avatar: 'img/userIcon.png',
    authMethod: 'mock',
    role: 'user'
  };

  public mockAdmin = {
    firstName: 'Admin',
    lastName: '1',
    email: 'admin@gmail.com',
    password: 'Admin@123',
    phoneNum: '01140558309',
    avatar: 'img/userIcon.png',
    authMethod: 'mock',
    role: 'admin'
  };

  constructor() {
    this.loadInitialUser();

    // Check for Google OAuth redirect on initialization
    if (window.location.hash.includes('access_token')) {
      this.handleGoogleRedirect();
    }
  }

  private loadInitialUser() {
    // Check localStorage for Google user
    const googleUser = localStorage.getItem('googleUser');
    if (googleUser) {
      this.setUser(JSON.parse(googleUser));
    }
  }

  private formatGoogleUser(userInfo: any): any {
    return {
      id: userInfo.sub,
      name: userInfo.name,
      email: userInfo.email,
      avatar: userInfo.picture ? userInfo.picture : 'img/userIcon.png',
      firstName: userInfo.given_name,
      lastName: userInfo.family_name,
      phoneNum: userInfo.phone_number || '011',
      authMethod: 'google',
      idToken: userInfo.id_token // Will be null unless you request it specifically
    };
  }

  private setUser(user: any) {
    this.currentUser.set(user);
    this.currentUserSubject.next(user);
  }

  private clearUser() {
    this.currentUser.set(null);
    this.currentUserSubject.next(null);
  }

  // Regular login (unchanged)
  Userlogin(email: string, password: string): boolean {
    if (email.toLowerCase() === this.mockUser.email && password === this.mockUser.password) {
      this.setUser(this.mockUser);
      return true;
    }
    return false;
  }

  Adminlogin(email: string, password: string): boolean {
    if (email.toLowerCase() === this.mockAdmin.email && password === this.mockAdmin.password) {
      this.setUser(this.mockAdmin);
      return true;
    }
    return false;
  }

  // Google login - now initiates OAuth flow
  googleLogin(): void {
    const clientId = '329985024640-j1e42v80vulq0c0pqom75puhm75c4f4i.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:4200/home';
    const scope = 'email profile openid';
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

    window.location.href = authUrl;
  }

  // Handle Google OAuth redirect
  private async handleGoogleRedirect(): Promise<void> {
    try {
      const fragment = window.location.hash.substring(1);
      const params = new URLSearchParams(fragment);
      const accessToken = params.get('access_token');

      if (!accessToken) {
        throw new Error('No access token found');
      }

      const userInfo = await this.getGoogleUserInfo(accessToken);
      const formattedUser = this.formatGoogleUser(userInfo);

      this.setUser(formattedUser);
      localStorage.setItem('googleUser', JSON.stringify(formattedUser));

      // Clear the URL fragment and navigate
      this.router.navigate(['/'], { replaceUrl: true });
    } catch (error) {
      console.error('Google login failed:', error);
      this.clearUser();
    }
  }

  private async getGoogleUserInfo(accessToken: string): Promise<any> {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    return await response.json();
  }

  // Unified logout
  logout() {
    if (this.currentUser()?.authMethod === 'google') {
      // For direct OAuth, we can't programmatically sign out of Google,
      // but we can clear our local state
      localStorage.removeItem('googleUser');

      // Optional: Redirect to Google logout page
      // window.location.href = 'https://accounts.google.com/Logout';
    }
    this.clearUser();
    this.router.navigate(['/']);
  }

  // Helper methods (unchanged)
  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  getAuthMethod(): string | null {
    return this.currentUser()?.authMethod || null;
  }

  private generateNonce(): string {
    return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }
}
