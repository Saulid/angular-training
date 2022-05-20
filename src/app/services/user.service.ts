import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { LoginUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private existingUsernames = ['AyeAye', 'Wutyi', 'Hlaing', 'Myat'];
  checkIfUsernameExists(value: string) {
    return of(this.existingUsernames
      .some((eachUser) => eachUser.toLocaleLowerCase() === value.toLocaleLowerCase()))
      .pipe(
        delay(1000)
      );
  }

  loginEmail = localStorage.getItem('email');
  loginPassword = localStorage.getItem('password');

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user: LoginUser) {
    if (user.email === this.loginEmail && user.password === this.loginPassword) {
      this.loggedIn.next(true);
      alert('Login Successfully');
      this.router.navigate(['member/register']);
    } else {
      this.loggedIn.next(false);
      alert('Invalid Info');
      this.router.navigate(['login']);
    }
  }

}