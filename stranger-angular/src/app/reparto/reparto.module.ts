import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartoRoutingModule } from './reparto-routing.module';
import { RepartoComponent } from './reparto.component';

@NgModule({
  imports: [
    CommonModule,
    RepartoRoutingModule
  ],
  declarations: [RepartoComponent],
  exports: [RepartoComponent]
})
export class RepartoModule { }
