import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Promoter } from '@models/promoter';

@Injectable({
  providedIn: 'root'
})
export class PromotersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPromoters(){
    return this.httpClient
      .get<Promoter[]>(`${environment.API}/promoters`);
  }

  createPromoter(value: any){
    return this.httpClient
      .post(`${environment.API}/promoters`, { promoter: value });
  }
}
