import { NgModule } from '@angular/core';
import { LibChildOneComponent } from './lib-child-one.component';
import { LibChildOneRoutingModule } from './lib-child-one-routing.module';



@NgModule({
  declarations: [
    LibChildOneComponent
  ],
  imports: [
    LibChildOneRoutingModule
  ],
  exports: [
    LibChildOneComponent
  ]
})
export class LibChildOneModule { }
