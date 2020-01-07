import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

import { Admin } from '@models/admin';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getProfile(): Observable<any>{
    return this.httpClient
      .get<Admin>(`${environment.API}/profile`)
  }
}
