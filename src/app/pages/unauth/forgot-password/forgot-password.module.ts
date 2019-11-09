import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { PutEmailComponent } from './put-email/put-email.component';
import { LinkSentComponent } from './link-sent/link-sent.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetSuccesfulComponent } from './reset-succesful/reset-succesful.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    PutEmailComponent,
    LinkSentComponent,
    ResetPasswordComponent,
    ResetSuccesfulComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
