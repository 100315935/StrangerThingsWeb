import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { PostIf } from '../modelos/blog';
import { PostService } from '../servicios/post.service';


@Component({
  selector: 'sta-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private aPost: Array<PostIf>;
  private blog: PostIf;

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.aPost = [];
    this.postService.getPosts().then(
       response =>  this.aPost = response
     );
  }

  enviar(blog) {
    console.log(blog);
    this.postService.setPosts(blog)
    .then(
      () => {this.postService.getPosts()
        .then(response =>  this.aPost = response);
      });
  }

  delete(i) {
    this.postService.deletePost(i)
    .then(
      () => {this.postService.getPosts()
        .then(response =>  this.aPost = response);
      });
  }
}
