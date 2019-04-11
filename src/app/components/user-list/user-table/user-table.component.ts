import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['../user-list.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() usersList: User[];

  constructor() { }

  ngOnInit() { }

}
