import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// Class Register Form
export class RegisterComponent implements OnInit {

  user: User = new User();
  receivedUser: User;
  exist: boolean = false;

  constructor(private httpService: HttpService, private router: Router) {
  }

  // If Register Success Navigate to Login Form
  buttonRegister(user: User) {
    this.httpService.postData(user)
      .subscribe(
        data => {
          if (data["Response"] === 'Exist') {
            this.exist = true;
          } else {
            this.router.navigateByUrl('/loginform')
          }
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
