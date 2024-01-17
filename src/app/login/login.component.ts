// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      console.log('Login successful');
      this.loginError = false;
      this.router.navigate(['/dashboard']); // Navigate to the dashboard
    } else {
      this.loginError = true;
    }
  }
}
