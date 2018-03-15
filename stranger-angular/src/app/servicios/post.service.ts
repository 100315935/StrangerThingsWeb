import { Injectable } from '@angular/core';
import { PostIf } from '../modelos/blog';
import { HttpClient} from '@angular/common/http';

const URLAPI = 'http://localhost:3000/posts';

@Injectable()
export class PostService {

  private sURL: string;
  private aPosts: Array<PostIf>;

  constructor (public http: HttpClient) {
      this.sURL = URLAPI;
      this.aPosts = [];
  }

  getPosts() {
    return this.http.get(this.sURL).toPromise()
    .then((response: any) => {
      this.aPosts = response;
      return this.aPosts;
    });
  }

  setPosts(blog) {
    console.log('Enviando datos');
    console.log(blog);
    return this.http.post(this.sURL, blog).toPromise();
  }

  deletePost(i) {
    i++;
    return this.http.delete(this.sURL + '/' + i).toPromise();
  }

  setId() {
    if (this.aPosts.length) {
      return (this.aPosts[this.aPosts.length - 1].id + 1);
    } else { return 1; }
  }
}
