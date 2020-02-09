import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Loan } from '@models/loan';
import { Client } from '@models/client';
import { Guarantee } from '@models/guarantee';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCredits(){
    return this.httpClient
      .get<Loan[]>(`${environment.API}/loans`);
  }

  getCredit(id: string){
    return this.httpClient
      .get(`${environment.API}/loans/${id}`)
  }

  createCredit(value: any){
    let headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .delete('Content-Type')

    return this.httpClient
      .post(`${environment.API}/loans`, value, { headers: headers });
  }

  createProduct(value: any){
    let headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .delete('Content-Type')

    return this.httpClient
      .post(`${environment.API}/products`, value, { headers: headers });
  }

  createPayment(id: string, value: any){
    return this.httpClient
      .post(`${environment.API}/payments/${id}`, { payment: value });
  }

  changeStatus(loans: Array<{id: string, status: number}>){
    return this.httpClient
      .put(`${environment.API}/loans_status`, { loans: { loans } })
  }

  //City service
  getClients(q: string) {
    let params: HttpParams = new HttpParams()
      .set('q', q)

    return this.httpClient
      .get<Client[]>(`${environment.API}/clients`, { params: params });
  }

  //Guarantee service
  getGuarantees(q: string) {
    let params: HttpParams = new HttpParams()
      .set('q', q)

    return this.httpClient
      .get<Guarantee[]>(`${environment.API}/guarantees`, { params: params });
  }
}
