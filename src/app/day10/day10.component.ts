import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-day10',
  templateUrl: './day10.component.html',
  styleUrls: ['./day10.component.scss']
})
export class Day10Component implements OnInit {

  public form: any;

  public userTable: any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      email: [null],
      ph: [null],
      address: [null],
      description: [null],
      country: [null],
      gender: [null],
      dob: [null],
    });
    
  }
  
  saveDetails(form: any) {
    this.userTable.push(this.form.value);
    localStorage.setItem('userTable', JSON.stringify(this.userTable));
  }

}
