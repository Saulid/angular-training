import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { DayFourComponent } from './day-four/day-four.component';
import { DayFiveComponent } from './day-five/day-five.component';
import { DaySixComponent } from './day-six/day-six.component';
import { DaySevenComponent } from './day-seven/day-seven.component';
import { UserRegistrationComponent } from './day8/user-registration/user-registration.component';
import { UserListComponent } from './day8/user-list/user-list.component';
import { Day10Component } from './day10/day10.component';
import { AssignmentDay12Component } from './assignment-day12/assignment-day12.component';



const routes: Routes = [
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'day-four', component: DayFourComponent },
  { path: 'day-five', component: DayFiveComponent },
  { path: 'day-six', component: DaySixComponent },
  { path: 'day-seven', component: DaySevenComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'day10', component: Day10Component },
  { path: 'day12', component: AssignmentDay12Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
