import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-assignment-day23',
  templateUrl: './assignment-day23.component.html',
  styleUrls: ['./assignment-day23.component.scss']
})
export class AssignmentDay23Component implements OnInit {

  public loginForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    localStorage.setItem('email', 'hol@gmail.com');
    localStorage.setItem('password', '123456');
  }

  public myError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
      this.userService.login(this.loginForm.value);
  }

}
