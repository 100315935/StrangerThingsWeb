import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule { }
