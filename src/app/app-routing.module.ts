import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//guards
import { UserGuard } from './guards/user.guard';

//resolver
import { PostResolver } from './resolver/post.resolver';

import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { DayFourComponent } from './pages/day-four/day-four.component';
import { DayFiveComponent } from './pages/day-five/day-five.component';
import { DaySixComponent } from './pages/day-six/day-six.component';
import { DaySevenComponent } from './pages/day-seven/day-seven.component';
import { UserRegistrationComponent } from './pages/day8/user-registration/user-registration.component';
import { UserListComponent } from './pages/day8/user-list/user-list.component';
import { Day10Component } from './pages/day10/day10.component';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { AssignmentDay15Component } from './pages/assignment-day15/assignment-day15.component';
import { AssignmentDay16Component } from './pages/assignment-day16/assignment-day16.component';
import { AssignmentDay18Component } from './pages/assignment-day18/assignment-day18.component';
import { AssignmentDay19Component } from './pages/assignment-day19/assignment-day19.component';
import { AssignmentDay20Component } from './pages/assignment-day20/assignment-day20.component';
import { AssignmentDay22Component } from './pages/assignment-day22/assignment-day22.component';
import { AssignmentDay23Component } from './pages/assignment-day23/assignment-day23.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AssignmentDay24Component } from './pages/assignment-day24/assignment-day24.component';
import { PostControlComponent } from './pages/post-control/post-control.component';
import { AssignmentDay25Component } from './pages/assignment-day25/assignment-day25.component';
import { AssignmentDay26Component } from './pages/assignment-day26/assignment-day26.component';
import { AssignmentDay27Component } from './pages/assignment-day27/assignment-day27.component';


const routes: Routes = [
  { path: '', redirectTo: 'day26', pathMatch: 'full' },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'day-four', component: DayFourComponent },
  { path: 'day-five', component: DayFiveComponent },
  { path: 'day-six', component: DaySixComponent },
  { path: 'day-seven', component: DaySevenComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'day10', component: Day10Component },
  { path: 'member/register', component: AssignmentDay11Component},
  { path: 'day12', component: AssignmentDay12Component, canActivate: [UserGuard] },
  { path: 'day14', component: AssignmentDay14Component, canActivate: [UserGuard] },
  { path: 'day15', component: AssignmentDay15Component },
  { path: 'day16', component: AssignmentDay16Component },
  { path: 'day18', component: AssignmentDay18Component },
  { path: 'day19', component: AssignmentDay19Component },
  { path: 'day20', component: AssignmentDay20Component, canActivate: [UserGuard] },
  { path: 'day22/:id', component: AssignmentDay22Component, canActivate: [UserGuard] },
  { path: 'login', component: AssignmentDay23Component },
  { path: 'day24', component: AssignmentDay24Component },
  { path: 'post', component: PostControlComponent, },
  { path: 'post/:id', component: PostControlComponent, resolve: { user: PostResolver } },
  { path: 'day25', component: AssignmentDay25Component },
  { path: 'day26', component: AssignmentDay26Component },
  { path: 'day27', component: AssignmentDay27Component },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
