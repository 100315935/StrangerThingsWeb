import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from '../servicios/post.service';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  declarations: [BlogComponent, PostsComponent],
  exports: [BlogComponent, PostsComponent],
  providers: [PostService]
})
export class BlogModule { }
