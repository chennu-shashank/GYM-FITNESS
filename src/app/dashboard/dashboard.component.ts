// dashboard.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <h2>Welcome, {{ username }}!</h2>
      <button (click)="logout()">Logout</button>
      <!-- Add other dashboard content here -->
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.username = authService.getUsername();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Navigate to login after logout
  }
}
