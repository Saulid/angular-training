import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['./day-four.component.scss']
})
export class DayFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Angular Event Binding";
  text1 = "Value on umber on click event";
  nums = 0;
  incDisabled = false;
  decDisabled = true;

  Increment() {
    this.nums += 1;
    this.decDisabled = false;
    if (this.nums == 10) {
      this.incDisabled = true;
    }
    return this.nums;
  }
  Decrement() {
    this.nums -= 1;
    this.incDisabled = false;
    if (this.nums == 0) {
      this.decDisabled = true;
    }
  }

}
