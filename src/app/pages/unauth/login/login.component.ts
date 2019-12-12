import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

import { Login } from '@models/login';
import { SessionService } from '@layouts/unauth/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showErrorMessage: boolean;
  loginTries: number;
  loginForm: FormGroup;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(
    private _sessions: SessionService,
    private formBuilder: FormBuilder,
    private cookies: CookieService,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.showErrorMessage = false;
    this.loginTries = 0;
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit({value, invalid}: {value: Login, invalid: boolean}) {
    if (invalid) {
      return;
    }
    this._sessions.signIn(value).subscribe(data => {
      console.log(data)
      this.cookies.put('fenix-t', data['session']['token']);
      this.router.navigate(['dashboard']);
    }, (error) => {
      this.loginFailed(error.error)
    });
  }

  loginFailed(data){
    this.showErrorMessage = true;
    this.loginTries++;
    this.renderer.addClass(this.email.nativeElement, 'danger');
    this.renderer.addClass(this.password.nativeElement, 'danger');
  }

  removeClass(element: any, text: string){
    this.renderer.removeClass(element, text);
  }
}
