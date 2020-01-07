import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { AdminsTableComponent } from './admins-table/admins-table.component';
import { AdminsAddComponent } from './admins-add/admins-add.component';

@NgModule({
  declarations: [
    AdminsComponent,
    AdminsTableComponent,
    AdminsAddComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule
  ]
})
export class AdminsModule { }
