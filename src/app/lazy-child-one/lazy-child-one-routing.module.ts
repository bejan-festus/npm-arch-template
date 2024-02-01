import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyChildOneComponent } from './lazy-child-one.component';

const routes: Routes = [
  {
    path:"",
    component:LazyChildOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyChildOneRoutingModule { }
