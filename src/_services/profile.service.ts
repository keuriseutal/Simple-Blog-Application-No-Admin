import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { User } from '../_models/users.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

const USER_API: string = 'http://localhost:3000/users';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http: Http, private httpClient: HttpClient) { }

  updateProfile(user: User): Observable<any> {
    return this.httpClient.put(`${USER_API}/${user.id}`, user, httpOptions);
  }
 
}





