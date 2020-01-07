import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { _throw as throwError } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie';
import { TranslateService } from '@ngx-translate/core';
import jwt_decode from 'jwt-decode';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(
    private cookie: CookieService,
    private translate: TranslateService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    let authReq = req.clone({
      headers: req.headers
        .append('Accept', 'application/vnd.fenix.v1+json')
        .append('X-Platform', 'dashboard')
    });

    // Set Lang
    if (this.translate.currentLang !== undefined) {
      authReq = authReq.clone({
        headers: authReq.headers
          .append('Accept-Language', this.translate.currentLang)
      });
    }

    // Get User token
    if (this.cookie.getObject('fenix-t')) {
      authReq = authReq.clone({
        headers: authReq.headers
          .append('Authorization', this.cookie.get('fenix-t'))
      });
    }
    console.log(jwt_decode(this.cookie.get('fenix-t')))
    // send the newly created request
    return next.handle(authReq).catch((error, caught) => {
      console.log(error);
      return Observable.throw(error);
    }) as any;
  }
}
