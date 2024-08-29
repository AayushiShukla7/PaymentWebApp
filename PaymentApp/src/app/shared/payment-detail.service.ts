import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url: string = environment.apiBaseURL + "PaymentDetails";
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();

  constructor(private http: HttpClient) { }

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

    return this.list;
  }
}
