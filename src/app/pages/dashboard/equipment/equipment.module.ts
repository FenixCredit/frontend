import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentComponent } from './equipment.component';
import { EquipmentTableComponent } from './equipment-table/equipment-table.component';
import { EquipmentAddComponent } from './equipment-add/equipment-add.component';

@NgModule({
  declarations: [
    EquipmentComponent,
    EquipmentTableComponent,
    EquipmentAddComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule
  ]
})
export class EquipmentModule { }
