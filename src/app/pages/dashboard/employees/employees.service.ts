import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Employee } from '@models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEmployees(){
    return this.httpClient
      .get<Employee[]>(`${environment.API}/employees`);
  }

  createEmployee(value: any){
    return this.httpClient
      .post(`${environment.API}/employees`, { employee: value });
  }
}
