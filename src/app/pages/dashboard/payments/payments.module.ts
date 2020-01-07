import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { PaymentsTableComponent } from './payments-table/payments-table.component';
import { PaymentsAddComponent } from './payments-add/payments-add.component';

@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentsTableComponent,
    PaymentsAddComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
