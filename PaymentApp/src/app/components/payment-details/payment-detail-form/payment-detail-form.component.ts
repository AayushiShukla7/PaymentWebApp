import { Component } from '@angular/core';
import { PaymentDetailService } from '../../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {

  constructor(public paymentDtlSvc: PaymentDetailService){}
  
}
