import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthGuardService {
  constructor(
    private cookies: CookieService,
    private router: Router
  ) {}

  canActivate() {
    if (!this.cookies.get('fenix-t')) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
