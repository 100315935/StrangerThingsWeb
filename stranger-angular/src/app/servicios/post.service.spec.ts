import { TestBed, inject } from '@angular/core/testing';
import { PostIf } from '../modelos/blog';
import { PostService } from './post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [PostService, HttpClient]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
