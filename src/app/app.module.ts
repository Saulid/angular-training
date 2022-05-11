import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


// pages
import { AppComponent } from './app.component';
import { DayFiveComponent } from './day-five/day-five.component';
import { DayFourComponent } from './day-four/day-four.component';
import { DaySevenComponent } from './day-seven/day-seven.component';
import { DaySixComponent } from './day-six/day-six.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegistrationComponent } from './day8/user-registration/user-registration.component';
import { UserListComponent } from './day8/user-list/user-list.component';
import { Day10Component } from './day10/day10.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AssignmentDay12Component } from './assignment-day12/assignment-day12.component';
import { AssignmentDay11Component } from './assignment-day11/assignment-day11.component';
import { AssignmentDay14Component } from './assignment-day14/assignment-day14.component';

import { UserService } from './services/user.service';
import { AssignmentDay15Component } from './assignment-day15/assignment-day15.component';
import { AssignmentDay16Component } from './assignment-day16/assignment-day16.component';
@NgModule({
  declarations: [
    AppComponent,
    DayFourComponent,
    DayFiveComponent,
    DaySixComponent,
    DaySevenComponent,
    UserDetailsComponent,
    UserRegistrationComponent,
    UserListComponent,
    Day10Component,
    AssignmentDay12Component,
    AssignmentDay11Component,
    AssignmentDay14Component,
    AssignmentDay15Component,
    AssignmentDay16Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
