import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    PaymentDetailsComponent
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'PaymentApp';
}
