import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepartoComponent } from './reparto.component';

const routes: Routes = [
  { path: '', component: RepartoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartoRoutingModule { }
