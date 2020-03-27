import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewDayComponent } from '../PAGES/new-day/new-day.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
  {path: '', component: NewDayComponent}
]


@NgModule({
  declarations: [NewDayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class NewDayModule { }
