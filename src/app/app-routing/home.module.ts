import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../PAGES/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../ELEMENTS/sidebar/sidebar.component';

const routes: Routes=[
  {path: '', component: HomeComponent, children: [
    {path: 'packages', loadChildren: ()=> import('./packages.module').then(m=>m.PackagesModule) }
   
  ]}
]


@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
