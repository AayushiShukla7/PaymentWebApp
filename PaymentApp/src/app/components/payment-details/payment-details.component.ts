import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent, FormsModule, CommonModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public paymentDtlSvc: PaymentDetailService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.paymentDtlSvc.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.paymentDtlSvc.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number) {
    if(confirm("Are you sure you want to delete this record?")){
      this.paymentDtlSvc.deletePaymentDetails(id)
      .subscribe({
        next: res => {
          this.paymentDtlSvc.list = res as PaymentDetail[];
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
        error: err => {
          console.log(err);
        }
      });
    }    
  }

}
