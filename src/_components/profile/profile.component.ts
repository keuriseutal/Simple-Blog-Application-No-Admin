import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users.service';
import { ProfileService } from '../../_services/profile.service';

import { User } from '../../_models/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: User[];
  loggedUser: User;
  interests: string[];
  msg: string;
  isSuccess: boolean;
  isButtonClicked: boolean = false;

  isEmail: boolean;
  isBdate: boolean;

  constructor(private usersService: UsersService, private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    /*
        this.loginService
          .getLoggedUser().subscribe((data: User) => {
            this.loginService.loggedUser = data;
          })
    */
    this.loggedUser = this.usersService.loggedUser;
  }

  onEditProfile(uname, fname, mname, lname, email, bdate, interests) {
    this.isButtonClicked = true;
    //check if email contains @gmail.com
    /*
    for (let i = 0; i < email.length; i++) {
      if (email[i] == "@") {
        if (email.substring(i) == "@gmail.com") {
          this.isEmail = true;
          break;
        }
      } else {
        continue;
        this.isEmail = false;
      }
    }//end check email loop

    //check if bdate is in mm/dd/yyyy format --- doesn't check leap years or correct number of days in a month yet
    if (bdate.length == 10) {
      if (//check month  
          (bdate.substring(0, 1) == ("01" || "02" || "03" || "04" || "05" || "06" || "07" || "08" || "09" || "10" || "11" || "12" )) 
          //check day
          && (bdate.substring(3, 4) == ("01" || "02" || "03" || "04" || "05" || "06" || "07" || "08" || "09" || "10" || "11" || "12" || "13" || "14" || "15" || "16" || "17" || "18" || "19" || "20" || "21" || "22" || "23" || "24" || "25" || "26" || "27" || "28" || "29" || "30" || "31")) 
          //check "/"
          && (+bdate.substring(6, 9) >= 1950) && (bdate.charAt(2) == "/") && (bdate.charAt(5) == "/") ){
            this.isBdate = true;
      }//end if format is correct
      else{
        this.isBdate = false;
      }
    }//end if bdate length is correct
    else{
      this.isBdate = false;
    }

    if(this.isEmail == true && this.isBdate == true){
      */
      this.msg = "Your profile was updated successfully";
      this.isSuccess = true;
      this.profileService.updateProfile(this.loggedUser).subscribe((data: User) => {
        this.usersService.loggedUser = data;
      });
    /*
    }//end if bdate and email is valid
    else{
      this.isSuccess = false;
      this.msg = "Your profile was not updated successfully. Please make sure that all inputs are valid";
    }
    */
}//end on EditProfile
}
