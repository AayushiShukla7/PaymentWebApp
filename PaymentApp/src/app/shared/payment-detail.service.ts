import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url: string = environment.apiBaseURL + "PaymentDetails";
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) { }

  resetForm(form: NgForm) {
    form.form.reset();    // NgForm => reset()
    this.formData = new PaymentDetail;
    this.formSubmitted = false;
  }

  // GET
  refreshList() {
    this.http.get(this.url)
    .subscribe({
      next: res => {
        //console.log(res);
        this.list = res as PaymentDetail[];
      },
      error: err => {
        console.log(err);
      }
    });
  }

  // POST (Insert)
  postPaymentDetails() {
    return this.http.post(this.url, this.formData);
  }

  // PUT (Update)
  putPaymentDetails() {
    return this.http.put(this.url + "/" + this.formData.paymentDetailId, this.formData);
  }

  // DELETE
  deletePaymentDetails(id:number) {
    return this.http.delete(this.url + "/" + id);
  }
}
