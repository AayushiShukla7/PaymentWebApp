import { Component } from '@angular/core';
import { PaymentDetailService } from '../../../shared/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {

  constructor(public paymentDtlSvc: PaymentDetailService, private toastr: ToastrService){}

  onSubmit(form: NgForm){
    this.paymentDtlSvc.formSubmitted = true;

    if(form.valid) {
      // Insert/New Record
      if(this.paymentDtlSvc.formData.paymentDetailId == 0) {
        this.insertRecord(form);
      }
      else {
        this.updateRecord(form);
      }
    }
  } 
  
  insertRecord(form: NgForm) {
    this.paymentDtlSvc.postPaymentDetails()
    .subscribe({
      next: res => {
        //console.log(res);
        this.toastr.success('Inserted successfully', 'Payment Detail Register');
        this.paymentDtlSvc.list = res as PaymentDetail[];
        this.paymentDtlSvc.resetForm(form);
      },
      error: err => {console.log(err)}
    });
  }

  updateRecord(form: NgForm) {
    this.paymentDtlSvc.putPaymentDetails()
    .subscribe({
      next: res => {
        //console.log(res);
        this.toastr.info('Updated successfully', 'Payment Detail Register');
        this.paymentDtlSvc.list = res as PaymentDetail[];
        this.paymentDtlSvc.resetForm(form);
      },
      error: err => {console.log(err)}
    });
  }
  
}
