import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

import { Post } from '../_models/posts.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

//const POST_API_DATESORT: string = 'http://localhost:3000/posts?_sort=date&_order=';
//const POST_API_TITLESORT: string = 'http://localhost:3000/posts?_sort=title&_order=';
const POST_API: string = 'http://localhost:3000/posts?isDraft=false';
const DRAFT_API: string = 'http://localhost:3000/posts?isDraft=true&author=';

const POSTS_API: string = 'http://localhost:3000/posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  post: Post;
  posts: Post[];

  constructor(private http: Http, private httpClient: HttpClient, private usersService: UsersService) { 
     this.getPosts("").subscribe(posts => this.posts = posts);
     this.getDrafts(this.usersService.loggedUser.uname).subscribe(posts => this.posts = posts);
  }

  getPosts(filter: string) {
    return this.http
      .get(POST_API + filter).pipe(map((response: Response) => response.json()));
  }

  getDrafts(author: string){
    return this.http
      .get(DRAFT_API + author ).pipe(map((response: Response) => response.json()));
  }

  submitDraft(post: Post){
    return this.httpClient.put(`${POSTS_API}/${post.id}`, post, httpOptions);
  }

  addPost(post: Post): Observable<any> {
    return this.httpClient.post<Post>(POSTS_API, post, httpOptions);
  }

  updatePost(post: Post): Observable<any> {
    return this.httpClient.put(`${POSTS_API}/${post.id}`, post, httpOptions);
  }

  deletePost(post: Post): Observable<any> {
    return this.httpClient.delete<Post>(`${POSTS_API}/${post.id}`, httpOptions);
  }
}





