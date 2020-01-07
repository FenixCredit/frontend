import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Admin } from '@models/admin';
import { Employee } from '@models/employee';
import { Client } from '@models/client';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAdmins(){
    return this.httpClient
      .get<Admin[]>(`${environment.API}/admins`);
  }

  getEmployees(){
    return this.httpClient
      .get<Employee[]>(`${environment.API}/employees`);
  }

  getClients(){
    return this.httpClient
      .get<Client[]>(`${environment.API}/clients`);
  }
}
