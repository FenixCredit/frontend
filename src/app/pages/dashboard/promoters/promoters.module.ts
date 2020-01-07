import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PromotersRoutingModule } from './promoters-routing.module';
import { PromotersComponent } from './promoters.component';
import { PromotersTableComponent } from './promoters-table/promoters-table.component';
import { PromotersAddComponent } from './promoters-add/promoters-add.component';

@NgModule({
  declarations: [
    PromotersComponent,
    PromotersTableComponent,
    PromotersAddComponent
  ],
  imports: [
    CommonModule,
    PromotersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PromotersModule { }
