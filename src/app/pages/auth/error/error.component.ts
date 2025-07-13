import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';

@Component({
  selector: 'app-error',
  standalone: true,
imports: [ButtonModule, RippleModule, RouterModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class Error {}
