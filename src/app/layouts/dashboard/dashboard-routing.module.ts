import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'users', loadChildren: '../../pages/dashboard/users/users.module#UsersModule' },
    { path: 'promoters', loadChildren: '../../pages/dashboard/promoters/promoters.module#PromotersModule' },
    { path: 'credits', loadChildren: '../../pages/dashboard/credits/credits.module#CreditsModule' },
    { path: 'payments', loadChildren: '../../pages/dashboard/payments/payments.module#PaymentsModule' },
    { path: 'admins', loadChildren: '../../pages/dashboard/admins/admins.module#AdminsModule' },
    { path: 'employees', loadChildren: '../../pages/dashboard/employees/employees.module#EmployeesModule' },
    { path: 'equipment', loadChildren: '../../pages/dashboard/equipment/equipment.module#EquipmentModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
