import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password.component';
import { PutEmailComponent } from './put-email/put-email.component';
import { LinkSentComponent } from './link-sent/link-sent.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetSuccesfulComponent } from './reset-succesful/reset-succesful.component';

const routes: Routes = [
  { path: '', component: ForgotPasswordComponent, children: [
    { path: 'put-email', component: PutEmailComponent },
    { path: 'link-sent', component: LinkSentComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'reset-succesful', component: ResetSuccesfulComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
