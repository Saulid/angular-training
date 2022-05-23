import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  username: string = '';
  email: string = '';
  phNumber: any;
  address: any;
  description: any;
  userList: any = [];
  userTable: any = [];


  constructor() { }
  ngOnInit(): void {
  }

  createUser() {
    console.log('testing;;');
    const param = {
      username: this.username,
      email: this.email,
      phNumber: this.phNumber,
      address: this.address,
      description: this.description,
    }
    this.userList.push(param);
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }

  refreshList() {
    this.userTable = localStorage.getItem('userList');
    this.userList = JSON.parse(this.userTable);
  }

}
