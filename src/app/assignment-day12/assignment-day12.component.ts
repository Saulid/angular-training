import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-assignment-day12',
  templateUrl: './assignment-day12.component.html',
  styleUrls: ['./assignment-day12.component.scss']
})
export class AssignmentDay12Component implements OnInit {

  date = new FormControl(new Date()); 
  formData: any = { 
    fname: '', 
    lname: '',
    email: '', 
  }; 
  userData: any = [];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  saveData() {
    this.userData.push(this.formData);
    this.formData = {
      fname: '',
      lname: '',
      email: '',
    };
    if (this.formData.invalid) { 
      this.snackBar.open('Please fill all fields', '', { duration: 2000 }); 
    } 
  }

  removeData(id: any) {
    this.userData.splice(id,1);
  }
}
