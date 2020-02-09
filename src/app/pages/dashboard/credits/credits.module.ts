import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './credits.component';
import { CreditsTableComponent } from './credits-table/credits-table.component';
import { CreditsAddComponent } from './credits-add/credits-add.component';
import { CreditsStatusComponent } from './credits-status/credits-status.component';

@NgModule({
  declarations: [
    CreditsComponent,
    CreditsTableComponent,
    CreditsAddComponent,
    CreditsStatusComponent
  ],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreditsModule { }
