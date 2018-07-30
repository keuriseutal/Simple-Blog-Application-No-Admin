import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_services/login.service';
import { User } from '../../_models/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: User[];
  errMsg: string;
  isError: boolean;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginService
      .getUsers()
      .subscribe((data: User[]) =>{
         this.users = data;
      })
  }

}
