import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../_models/users.interface';

const USER_API: string = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: Http) {}

  getUsers():Observable<User[]>{
    return this.http
      .get(USER_API).pipe(map((response: Response) => response.json()));
  }

  setCurrentUser(id: number){
    return this.http.get(USER_API+"/"+id).pipe(map((response: Response) => response.json()));
  }

  getCurrentUser(){
    
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