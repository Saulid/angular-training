import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

const USER_LIST: User[] = [
  { id: 2, name: 'Kyaw Kyaw', email: 'kaywkyaw@gmail.com', age: 24, hobby: 'swimming,reading' },
  { id: 3, name: 'Aye Aye', email: 'ayeaye@gmail.com', hobby: 'cooking,eating' },
  { id: 4, name: 'Tun Tun', email: 'tuntun@gmail.com', age: 20, phone: '+959754214896', hobby: 'singing,dancing' },
];
@Component({
  selector: 'app-assignment-day15',
  templateUrl: './assignment-day15.component.html',
  styleUrls: ['./assignment-day15.component.scss']
})
export class AssignmentDay15Component implements OnInit {

  userListArr = USER_LIST;
  displayedColumns = ['id', 'name', 'email', 'age', 'phone', 'hobby'];

  constructor() { }

  ngOnInit(): void {
  }

}
