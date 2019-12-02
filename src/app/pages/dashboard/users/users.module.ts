import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersAddComponent } from './users-add/users-add.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UsersAddComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
