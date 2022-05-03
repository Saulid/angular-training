import { Component, OnInit, ViewChild } from '@angular/core'; 
import { FormControl } from '@angular/forms';
export interface Position {
  id: string;
  value: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  date = new FormControl(new Date()); 
  formData: any = { 
    name: '', 
    email: '', 
    mbdate: this.date.value
  }; 
  userData: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveData() {
    this.userData.push(this.formData);
    this.formData = {
      name: '',
      email: '',
      mbdate: this.date.value
    };
  }

  removeData(id: any) {
    this.userData.splice(id,1);
  }

}
