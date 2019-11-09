import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UnauthGuardService {
  constructor(
    private cookies: CookieService,
    private router: Router
  ) {}

  canActivate() {
    if (this.cookies.get('fenix-t')) {
      this.router.navigate(['dashboard']);
      return false;
    }

    return true;
  }
}
