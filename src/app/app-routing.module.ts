import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@shared/auth/auth-guard.service';
import { UnauthGuardService } from '@shared/auth/unauth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './layouts/unauth/unauth.module#UnauthModule',
    canActivate: [UnauthGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: './layouts/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
