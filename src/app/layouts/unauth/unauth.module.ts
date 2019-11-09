import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthRoutingModule } from './unauth-routing.module';
import { UnauthComponent } from './unauth.component';
import { LoginComponent } from '@pages/unauth/login/login.component';

@NgModule({
  declarations: [
    UnauthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UnauthRoutingModule
  ]
})
export class UnauthModule { }
