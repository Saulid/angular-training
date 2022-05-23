import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-seven',
  templateUrl: './day-seven.component.html',
  styleUrls: ['./day-seven.component.scss']
})
export class DaySevenComponent implements OnInit {

  constructor() { }
  
  name: string = '';
  age: any = '';
  country: string = '';

  ngOnInit(): void {
  }
  people: any[] = [
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
  ];
}
