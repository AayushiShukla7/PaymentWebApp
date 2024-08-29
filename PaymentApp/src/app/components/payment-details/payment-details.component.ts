import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent, FormsModule, CommonModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public paymentDtlSvc: PaymentDetailService){}

  ngOnInit(): void {
    this.paymentDtlSvc.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.paymentDtlSvc.formData = Object.assign({}, selectedRecord);
  }

}
