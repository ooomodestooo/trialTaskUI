import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersList: User[];

  constructor(private httpService: HttpService, private router: ActivatedRoute, private rout: Router , private shareService: ShareService) { 
    this.usersList = [];
  }

  ngOnInit() {
// If Not Exist Authorized User Navigate To Login Form
    this.shareService.logonID = this.router.snapshot.paramMap.get("user");
    this.httpService.checkUserAut(this.shareService.logonID).subscribe(
      data => {
        if (data['Response'] === 'Wrong'){
          this.rout.navigateByUrl('/loginform');
          this.shareService.logonID = undefined;
        }
      },
      error => { console.log(error);
        this.rout.navigateByUrl('/loginform');
          this.shareService.logonID = undefined;
       }

    );
    this.getAllUsers();
  }

// Create User Table With All Registred User
  getAllUsers(){
    this.httpService.getAllUsers().subscribe(
      (data: User[]) => {
        this.usersList = data;
      },
      error => console.log(error)
    );
  }
  
// Return User Table With Registred User Whith Search Name 
  onSearch(user: User) {
    this.httpService.searchUser(user).subscribe(
      (data: User[]) => {
        this.usersList = data;
      },
      error => console.log(error)
    );
  }
}
