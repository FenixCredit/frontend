import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UnauthRoutingModule } from './unauth-routing.module';
import { UnauthComponent } from './unauth.component';
import { SessionService } from './session.service';
import { LoginComponent } from '@pages/unauth/login/login.component';

@NgModule({
  declarations: [
    UnauthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UnauthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SessionService
  ]
})
export class UnauthModule { }
