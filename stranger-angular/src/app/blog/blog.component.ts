import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { PostIf } from '../modelos/blog';


@Component({
  selector: 'sta-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private sNombre: string;
  private sTitulo: string;
  private sPost: string;
  private aPost: Array<PostIf>;
  private blog: PostIf;

  constructor() { }

  ngOnInit() {
    this.blog = {
      nombre: '',
      titulo: '',
      post: ''
    };
    this.sNombre = '';
    this.sTitulo = '';
    this.sPost = '';
    this.aPost = [];
  }

  enviar() {
    if ( this.sNombre === '') {
      this.sNombre = 'Anónimo';
    }
    this.blog = {
      nombre: this.sNombre,
      titulo: this.sTitulo,
      post: this.sPost
    };
    this.aPost.push(this.blog);
    this.reset();
  }

  delete(i) {
    this.aPost.splice(i, 1);
  }

  reset() {
    this.sNombre = '';
    this.sPost = '';
    this.sTitulo = '';
  }
}
