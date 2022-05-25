import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

//services
import { UserService } from './services/user.service';

//pipe
import { CustompipePipe } from './pipes/custompipe.pipe';
import { Custompipe1Pipe } from './pipes/custompipe1.pipe';

// pages
import { AppComponent } from './app.component';
import { DayFiveComponent } from './pages/day-five/day-five.component';
import { DayFourComponent } from './pages/day-four/day-four.component';
import { DaySevenComponent } from './pages/day-seven/day-seven.component';
import { DaySixComponent } from './pages/day-six/day-six.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserRegistrationComponent } from './pages/day8/user-registration/user-registration.component';
import { UserListComponent } from './pages/day8/user-list/user-list.component';
import { Day10Component } from './pages/day10/day10.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { AssignmentDay15Component } from './pages/assignment-day15/assignment-day15.component';
import { AssignmentDay16Component } from './pages/assignment-day16/assignment-day16.component';
import { AssignmentDay18Component } from './pages/assignment-day18/assignment-day18.component';
import { AssignmentDay19Component } from './pages/assignment-day19/assignment-day19.component';
import { AssignmentDay20Component } from './pages/assignment-day20/assignment-day20.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AssignmentDay22Component } from './pages/assignment-day22/assignment-day22.component';

import { AssignmentDay24Component } from './pages/assignment-day24/assignment-day24.component';
import { PostControlComponent } from './pages/post-control/post-control.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentDay23Component } from './pages/assignment-day23/assignment-day23.component';
import { AssignmentDay25Component } from './pages/assignment-day25/assignment-day25.component';
import { AssignmentDay26Component } from './pages/assignment-day26/assignment-day26.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { AssignmentDay27Component } from './pages/assignment-day27/assignment-day27.component';


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
    AssignmentDay16Component,
    AssignmentDay18Component,
    AssignmentDay19Component,
    CustompipePipe,
    Custompipe1Pipe,
    AssignmentDay20Component,
    PageNotFoundComponent,
    AssignmentDay22Component,
    AssignmentDay23Component,
    AssignmentDay24Component,
    PostControlComponent,
    AssignmentDay25Component,
    AssignmentDay26Component,
    ToDoListComponent,
    AssignmentDay27Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [
    UserService,
    CustompipePipe,
    Custompipe1Pipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
