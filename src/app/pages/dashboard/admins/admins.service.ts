import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Admin } from '@models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAdmins(){
    return this.httpClient
      .get<Admin[]>(`${environment.API}/admins`);
  }

  createAdmin(value: any){
    return this.httpClient
      .post(`${environment.API}/admins`, { admin: value });
  }
}
