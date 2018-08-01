import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Post } from '../_models/posts.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

const POST_API_DATESORT: string = 'http://localhost:3000/posts?_sort=date&_order=';
const POST_API_TITLESORT: string = 'http://localhost:3000/posts?_sort=title&_order=';
const POST_API: string = 'http://localhost:3000/posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  post: Post;
  posts: Post[];

  constructor(private http: Http, private httpClient: HttpClient) { 
   //  this.getPosts("?_sort=date&_order=desc").subscribe(users => this.posts = posts);
  }

  getPosts(filter: string) {
    return this.http
      .get(POST_API + filter).pipe(map((response: Response) => response.json()));
  }

  getDrafts(){
    return this.http
      .get(POST_API + "?isDraft=true").pipe(map((response: Response) => response.json()));
  }
  addPost(post: Post): Observable<any> {
    return this.httpClient.post<Post>(POST_API, post, httpOptions);
  }

  updatePost(post: Post): Observable<any> {
    return this.httpClient.put(`${POST_API}/${post.id}`, post, httpOptions);
  }

  deletePost(post: Post): Observable<any> {
    return this.httpClient.delete<Post>(`${POST_API}/${post.id}`, httpOptions);
  }
}





