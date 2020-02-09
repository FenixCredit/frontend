import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './credits.component';
import { CreditsTableComponent } from './credits-table/credits-table.component';
import { CreditsAddComponent } from './credits-add/credits-add.component';
import { CreditsStatusComponent } from './credits-status/credits-status.component';
import { CreditsProductsComponent } from './credits-products/credits-products.component';
import { CreditsDetailComponent } from './credits-detail/credits-detail.component';
import { GlobalModule } from '@shared/module/global.module';

@NgModule({
  declarations: [
    CreditsComponent,
    CreditsTableComponent,
    CreditsAddComponent,
    CreditsStatusComponent,
    CreditsProductsComponent,
    CreditsDetailComponent
  ],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalModule
  ]
})
export class CreditsModule { }
