import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from '../blog-routing.module';
import { BlogComponent } from '../blog.component';
import { PostsComponent } from '../posts/posts.component';
import { PostService } from '../../servicios/post.service';
import { AppComponent } from '../../app.component';
import { CabezaComponent } from '../../core/cabeza/cabeza.component';
import { PieComponent } from '../../core/pie/pie.component';
import { MenuComponent } from '../../core/menu/menu.component';
import { AsideComponent } from '../../core/aside/aside.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InicioModule } from '../../inicio/inicio.module';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        BrowserModule,
        InicioModule,
        HttpClientModule
      ],
      declarations: [
        BlogComponent,
        PostsComponent,
        AppComponent,
        CabezaComponent,
        PieComponent,
        MenuComponent,
        AsideComponent,
      ],
      providers: [HttpClient, PostService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
