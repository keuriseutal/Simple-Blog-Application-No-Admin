import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../_models/users.interface';
import { LoggedUser } from '../_models/loggedUser.interface';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

const USER_API: string = 'http://localhost:3000/users';
const LOGGEDUSER_API: string = 'http://localhost:3000/loggedUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: Http, private httpClient :HttpClient) {}

  getUsers():Observable<User[]>{
    return this.http
      .get(USER_API)
      .pipe(map((response: Response) => response.json()));
  }

  loginUser (loggedUser: LoggedUser): Observable<LoggedUser> {
  return this.httpClient.post<LoggedUser>(LOGGEDUSER_API, loggedUser, httpOptions);
  }

/*
  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json());
  }
*/
}