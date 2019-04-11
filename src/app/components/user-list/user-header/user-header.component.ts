import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { HttpService } from 'src/app/services/http.service';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['../user-list.component.css']
})
export class UserHeaderComponent implements OnInit {

  @Output() onSearch = new EventEmitter<User>();
  @Output() getAllUsers = new EventEmitter<null>();
  
  searchUser: User;

  constructor(private httpService: HttpService, private router: Router, private shareService: ShareService) { 
    this.searchUser = new User();
    this.searchUser.name = "";
  }
  
// Logout And Navigate To Login Form
  buttonLogout() {
    this.httpService.logout(this.shareService.logonID).subscribe(
      data => {
        if (data['Response'] === "Success"){
          this.router.navigateByUrl('/loginform');
          this.shareService.logonID = undefined;
        }
      }
    )
   
  }

  ngOnInit() { }

  search() {
    this.onSearch.emit(this.searchUser);
  }

  buttonRefresh() {
    this.getAllUsers.emit();
  };

}
