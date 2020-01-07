import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotersComponent } from './promoters.component';

const routes: Routes = [
  { path: '', component: PromotersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotersRoutingModule { }
