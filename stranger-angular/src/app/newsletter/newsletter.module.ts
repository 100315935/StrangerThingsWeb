import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterComponent } from './newsletter.component';

@NgModule({
  imports: [
    CommonModule,
    NewsletterRoutingModule
  ],
  declarations: [NewsletterComponent],
  exports: [NewsletterComponent]
})
export class NewsletterModule { }
