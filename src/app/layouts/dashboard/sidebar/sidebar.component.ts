import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';

import { SessionService } from '@layouts/unauth/session.service';
import { DashboardService } from '../dashboard.service';
import { Admin } from '@models/admin';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  admin: Admin;
  @ViewChildren('route') routes: any;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private cookies: CookieService,
    private _sessions: SessionService,
    private _dashboard: DashboardService
  ) {
    this.admin = new Admin();
  }

  ngOnInit() {
    this.getProfile()
  }

  getProfile(){
    this._dashboard.getProfile().subscribe(data => {
      this.admin = data["admin"];
      console.log(this.admin)
    });
  }

  goto(element: any){
    this.routes.forEach((route) => {
      this.renderer.removeClass(route.nativeElement, 'active');
    })

    console.log(element)

    this.renderer.addClass(element, 'active');
    this.router.navigate([
      'dashboard',
      element.id
    ]);
  }

  signOut(){
    this._sessions.signOut().subscribe(data => {
      this.cookies.remove('fenix-t');
      this.router.navigate(['/login']);
    });
  }
}
