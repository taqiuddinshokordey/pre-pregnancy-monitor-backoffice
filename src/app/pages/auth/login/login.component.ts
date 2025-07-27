import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../core/services/api.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator, HttpClientModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class Login {
    email: string = '';
    password: string = '';
    checked: boolean = false;

    constructor(private api: ApiService, private router: Router) {}

    login() {
        console.log('Login method called');
        this.api.login(this.email, this.password).subscribe({
            next: (res) => {
                console.log('Login successful:', res);
                this.router.navigate(['/dashboard']);
            },
            error: (err) => {
                console.error('Login failed:', err);
                alert('Login failed: ' + (err.error?.message || err.message));
            }
        });
    }
}
