import { NgModule } from '@angular/core';
import { SafePipe } from '@shared/pipe/safe.pipe';

@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [],
  exports: [
    SafePipe
  ]
})
export class GlobalModule { }
