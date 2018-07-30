import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../_services/login.service';
import { User } from '../../_models/users.interface';
import { LoggedUser } from '../../_models/loggedUser.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  errMsg: string;
  isError: boolean;

  loggedUsers: LoggedUser[];
  loggedUser: LoggedUser;

  constructor(private loginService: LoginService, private router: Router) {}
  
  ngOnInit() {
     this.loginService
      .getUsers()
      .subscribe((data: User[]) =>{
         this.users = data;
      })

      this.errMsg = "";
      this.isError = false;
  }

  onLogin(uname, pass){

    if(uname.length != 0 && pass.length != 0){
      for(let i = 0; i < this.users.length; i++){
        //check if username and password exists in the database
        if((this.users[i].uname == uname) && (this.users[i].pass == pass)){
          //set user as loggedIn
          this.setAsLoggedIn(this.users[i].id, this.users[i].uname);
          //navigate to dashboard
          this.router.navigate(['/','dashboard']);
          console.log('isUser' + this.users[i].uname + this.users[i].pass);
          break;
        }else if((this.users[i].uname != uname) && (this.users[i].pass != pass)){
          this.errMsg = "The data that you've entered does not exist";
          this.isError = true;
          console.log('!isUser' + this.users[i].uname + this.users[i].pass);
          continue;
        }
      }//end loop
    }//end if fields are not empty
    else{
      this.errMsg = 'Please make sure that all fields are filled';
      this.isError = true;
    }//end else field(s) is/are empty
  }//end onLogin

  setAsLoggedIn(id: number, uname: string): void {
    uname = uname.trim();
    if (!uname) { return; }
    this.loginService.loginUser({ id, uname } as LoggedUser)
      .subscribe(loggedUser => {
        this.loggedUsers.push(loggedUser);
      });
  }
  
   /*
  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }
  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }
  */
}
