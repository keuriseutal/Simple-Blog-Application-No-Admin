import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../_services/dashboard.service';
import { LoginService } from '../../_services/login.service';
import { Post } from '../../_models/posts.interface';
import { User } from '../../_models/users.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[];
  user: User;
  currentUser: User;
  constructor(private dashboardService: DashboardService, private loginService: LoginService) { }

  ngOnInit() {
    this.dashboardService
      .getPosts()
      .subscribe((data: Post[]) =>{
         this.posts = data;
      })
    /*
    this.loginService
          .getCurrentUser(this.users[i].id)
          .subscribe((data : User) => {
          this.user = data;
          })
      */
  }

}
