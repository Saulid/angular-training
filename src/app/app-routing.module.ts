import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaySevenComponent } from './day-seven/day-seven.component';

const routes: Routes = [
  {
    path: '',
    component: DaySevenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
