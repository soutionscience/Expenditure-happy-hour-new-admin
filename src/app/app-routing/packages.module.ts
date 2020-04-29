import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from '../PAGES/packages/packages.component';
import { Routes, RouterModule } from '@angular/router';
import{ MatIconModule} from '@angular/material/icon'
import { CountryPickerService, CountryPickerModule, CountryPickerComponent } from 'ngx-country-picker';

const routes: Routes =[
  {path: '', component: PackagesComponent}
]

@NgModule({
  declarations: [PackagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
   // CountryPickerModule
  ],
  entryComponents: []
})
export class PackagesModule { }
