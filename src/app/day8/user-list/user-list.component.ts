import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: any = [];
  userTable: any = [];

  constructor() { }

  ngOnInit(): void {
    this.userTable = localStorage.getItem('userList');
    this.userList = JSON.parse(this.userTable);
  }


}
