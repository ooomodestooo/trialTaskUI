import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Class Login Form
export class LoginComponent implements OnInit {

  user: User = new User();
  rightUser: boolean = false;
  exist: boolean = false;
  userLogonIDNowLogForm: String = "";


  constructor(private httpService: HttpService, private router: Router, public shareService: ShareService) { 
  }

  // If User Exist Navigate to User List And Save Now Authorized User
  buttonLogin() {
    this.httpService.checkUser(this.user).subscribe(
      data => {
        if (data["Response"] === 'Wrong'){
          this.exist = true;
        } else {
          this.shareService.logonID = this.user.logonID;
          this.router.navigateByUrl('/user-list/' + this.user.logonID);
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
