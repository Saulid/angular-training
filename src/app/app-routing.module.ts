import { NgModule } from '@angular/core';
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
import { AssignmentDay11Component } from './assignment-day11/assignment-day11.component';
import { AssignmentDay14Component } from './assignment-day14/assignment-day14.component';
import { AssignmentDay15Component } from './assignment-day15/assignment-day15.component';
import { AssignmentDay16Component } from './assignment-day16/assignment-day16.component';
import { AssignmentDay18Component } from './assignment-day18/assignment-day18.component';
import { AssignmentDay19Component } from './assignment-day19/assignment-day19.component';
import { AssignmentDay20Component } from './assignment-day20/assignment-day20.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'day12', pathMatch: 'full' },

  { path: 'user-details', component: UserDetailsComponent },
  { path: 'day-four', component: DayFourComponent },
  { path: 'day-five', component: DayFiveComponent },
  { path: 'day-six', component: DaySixComponent },
  { path: 'day-seven', component: DaySevenComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'day10', component: Day10Component },
  { path: 'member/register', component: AssignmentDay11Component},
  { path: 'day12', component: AssignmentDay12Component },
  { path: 'day14', component: AssignmentDay14Component },
  { path: 'day15', component: AssignmentDay15Component },
  { path: 'day16', component: AssignmentDay16Component },
  { path: 'day18', component: AssignmentDay18Component },
  { path: 'day19', component: AssignmentDay19Component},
  { path: 'day20', component: AssignmentDay20Component},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
