import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthComponent } from './unauth.component';
import { LoginComponent } from '@pages/unauth/login/login.component';

const routes: Routes = [
  { path: '', component: UnauthComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'forgot-password', loadChildren: '../../pages/unauth/forgot-password/forgot-password.module#ForgotPasswordModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthRoutingModule { }
