import { Component, OnInit, EventEmitter, ViewChild, Output } from '@angular/core';
import { PostIf } from '../../modelos/blog';
import { PostService } from '../../servicios/post.service';

@Component({
  selector: 'sta-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  @ViewChild('form1') formUser: any;
  blog: PostIf;
  @Output() outEnviar: EventEmitter<PostIf>;

  constructor(public postService: PostService) {
    this.outEnviar = new EventEmitter();
   }

  ngOnInit() {
    this.blog = {
      id: 0,
      nombre: '',
      titulo: '',
      post: ''
    };
  }

  enviar() {
    if (this.blog.nombre === '') {
      this.blog.nombre = 'Anónimo';
    }
    this.blog.id = this.postService.setId();
    this.outEnviar.emit(this.blog);
    console.log('Datos enviados');
    this.reset();
  }

  private reset() {
    this.blog = {id: 0, nombre: '', titulo: '', post: ''};
  }
}
