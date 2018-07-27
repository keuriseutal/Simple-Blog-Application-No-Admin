import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Post } from '../_models/posts.interface';

const POST_API: string = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: Http) {}

  getPosts():Observable<Post[]>{
    return this.http
      .get(POST_API).pipe(map((response: Response) => response.json()));
  }
}
