import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERViCES/api.service';
import { MatDialog } from '@angular/material/dialog';
import { NewPackageComponent } from 'src/app/DIALOGS/new-package/new-package.component';
import { DeleteComponent } from 'src/app/DIALOGS/delete/delete.component';
import { AddDaysComponent } from 'src/app/DIALOGS/add-days/add-days.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
 allPackages: String[];

  constructor(private api: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPackages('api/packages')
  }
  getPackages(route){
   return this.api.getResource(route)
   .subscribe(resp=> this.allPackages = resp)
  }

  newPackage(){
    this.dialog.open(NewPackageComponent, {width: '600px' , height: '900px'})
  }
  deletePackage(p){
   // console.log('delete ', p);
    this.dialog.open(DeleteComponent, {width: '300px', height: 'auto',   data: {
      id: p, route: 'api/packages'
    }})
  }

  addDays(p){
    this.dialog.open(AddDaysComponent, {width: '500px', height: 'auto', data:{id: p, route: 'api/packages'}})
  }

}
