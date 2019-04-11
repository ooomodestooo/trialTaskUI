import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { ShareService } from 'src/app/services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['../user-list.component.css']
})
export class UserEditComponent implements OnInit {

  currentUser: User;
  editUser: User;

  isEdit: boolean;
  hiddenChangeSaved: boolean = true;
  hiddenButtonDelete: boolean = true;
  cancelButton: boolean = true;

  constructor(private httpService: HttpService, private router: Router, private shareService: ShareService) { 
    this.editUser = new User();
  }

  ngOnInit() {
// Create User Profile Where User It's Now Authorized User
    this.httpService.getUserInfo(this.shareService.logonID).subscribe(
      (data: User) => {
        this.currentUser = data;
        if (this.currentUser.email)
          this.editUser.email = this.currentUser.email;
        this.editUser.name = this.currentUser.name;
      },
      error => console.log(error)
    );
  }

  onEdit() {
    this.editUser.logonID = this.currentUser.logonID;
    this.isEdit = true;
    this.cancelButton = true;
  }

  onCancel() {
    this.editUser = new User();
    if ( this.currentUser.email)
      this.editUser.email = this.currentUser.email;
    this.editUser.name = this.currentUser.name;
    this.isEdit = false;
    this.hiddenChangeSaved = true;
    this.cancelButton = false;
    this.hiddenButtonDelete = true;
  }
// Delete User Profile
  onDelete() {
    this.httpService.userDelete(this.currentUser).subscribe(
      data => {
        if (data["Response"] === 'Deleted')
          this.router.navigateByUrl('/loginform');
      },
      error => console.log(error)
    );
  }
// Update User Profile
  onSave() {
    this.httpService.userUpdate(this.editUser).subscribe(
        data => {
          if (data["Response"] === 'Saved') {
            this.hiddenChangeSaved = false; 
          }
        },
        error => console.log(error)
      );
  }

  buttonDelete() {
    this.hiddenButtonDelete = false;
  }
}
