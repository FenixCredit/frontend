import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesTableComponent,
    EmployeesAddComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
