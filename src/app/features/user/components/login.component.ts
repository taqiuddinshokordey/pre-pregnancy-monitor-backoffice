import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Login Test</h2>
      <form (ngSubmit)="onLogin()">
        <div>
          <label>Email:</label>
          <input type="email" [(ngModel)]="email" name="email" required>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" [(ngModel)]="password" name="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <div *ngIf="result">
        <pre>{{ result | json }}</pre>
      </div>
    </div>
  `,
  styles: [`
    .login-container { padding: 20px; }
    div { margin: 10px 0; }
    label { display: block; margin-bottom: 5px; }
    input { width: 200px; padding: 5px; }
    button { padding: 10px 20px; }
  `]
})
export class LoginComponent {
  email = 'taqiuddinshokordey@gmail.com';
  password = '#perkasa2707';
  result: any = null;

  private apiService = inject(ApiService);

  onLogin() {
    console.log('Login button clicked');
    this.apiService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        console.log('Login response:', response);
        this.result = response;
      },
      error: (error: any) => {
        console.error('Login error:', error);
        this.result = { error: error.message };
      }
    });
  }
}
