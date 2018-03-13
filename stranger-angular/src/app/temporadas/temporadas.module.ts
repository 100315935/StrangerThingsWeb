import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemporadasRoutingModule } from './temporadas-routing.module';
import { TemporadasComponent } from './temporadas.component';

@NgModule({
  imports: [
    CommonModule,
    TemporadasRoutingModule
  ],
  declarations: [TemporadasComponent],
  exports: [TemporadasComponent]
})
export class TemporadasModule { }
