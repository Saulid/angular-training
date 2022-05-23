import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day19',
  templateUrl: './assignment-day19.component.html',
  styleUrls: ['./assignment-day19.component.scss']
})
export class AssignmentDay19Component implements OnInit {

  birthday = new Date(2001, 4, 8);
  amount = 1200.21;
  power = 6;
  factor = 4;
  myName = "Htet Oo Lwin";
  nickName = "saulid";
  isMyName = true;

  constructor() { }

  ngOnInit(): void {
  }

}
