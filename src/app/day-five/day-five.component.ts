import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['./day-five.component.css']
})
export class DayFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colspanVal = 3;
  isTrue = true;
  styles = "font-size: 25px; background-color: green;";
  users = [
    { name: 'Jack Ryan', age: '45 ' },
    { name: 'Lisa Ray', age: '23' },
    { name: 'Marcus R', age: '19' },
    { name: 'Abhinav M', age: '30' }
  ]
}
