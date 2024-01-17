// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private username: string = '';

  login(username: string, password: string): boolean {
    // Simulate authentication logic
    if (username === 'shashi' && password === '12345') {
      this.isAuthenticated = true;
      this.username = username;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.username = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string {
    return this.username;
  }
}
