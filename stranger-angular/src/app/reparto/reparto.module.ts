import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RepartoRoutingModule } from './reparto-routing.module';
import { RepartoComponent } from './reparto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RepartoRoutingModule,
    FormsModule
  ],
  declarations: [RepartoComponent],
  exports: [RepartoComponent]
})
export class RepartoModule { }
