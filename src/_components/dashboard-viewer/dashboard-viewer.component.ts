import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users.service';
import { User } from '../../_models/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.css']
})
export class DashboardViewerComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    
    this.usersService
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
      })
  }

  onLogOut() {
    for (let i = 0; i < this.users.length; i++) {
      //check loggedUsre
      if (this.users[i].isLoggedIn == true) {
        //set user as loggedIn
        this.users[i].isLoggedIn = false;
        this.usersService.setAsLoggedOut(this.users[i]).subscribe();
        console.log(this.users[i].uname + " is online? " + this.users[i].isLoggedIn);
        this.router.navigate(['/', 'login']);

        break;
      }
    }//end loop
  }
}
