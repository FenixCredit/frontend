import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

import { Login } from '@models/login';
import { ForgotPassword } from '@models/forgot-password';
import { PasswordRecover } from '@models/password-recover';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  signIn(credentials: Login){
    return this.httpClient
      .post(`${environment.API}/sessions`, {
        session: credentials
      })
  }

  signOut(){
    return this.httpClient
      .delete(`${environment.API}/sessions`)
  }

  recoverPassword(credentials: ForgotPassword){
    return this.httpClient
      .post(`${environment.API}/recover_password`, {
        user: credentials
      })
  }

  resetPassoword(credentials: PasswordRecover){
    return this.httpClient
      .put(`${environment.API}/recover_password`, {
        user: credentials
      });
  }
}
