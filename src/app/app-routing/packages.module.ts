import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from '../PAGES/packages/packages.component';
import { Routes, RouterModule } from '@angular/router';
import{ MatIconModule} from '@angular/material/icon'

const routes: Routes =[
  {path: '', component: PackagesComponent}
]

@NgModule({
  declarations: [PackagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class PackagesModule { }
