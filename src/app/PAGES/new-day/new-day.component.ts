import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/SERViCES/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-day',
  templateUrl: './new-day.component.html',
  styleUrls: ['./new-day.component.scss']
})
export class NewDayComponent implements OnInit {
   Day =[];
   DayObj = {};
   createDayForm : FormGroup
   id: String
   Package = [];
   
   

  constructor(private route:ActivatedRoute, private fb: FormBuilder,
    private api: ApiService,
    private location: Location) { }

  ngOnInit(): void {
    this.createForm();
   this.id = this.route.snapshot.params['id'];
   this.getPackage()
   
  }

  save(){
    this.Day.length = 0;
    this.api.postResource('api/days', this.createDayForm.value)
    .subscribe(resp=> { 
      this.Day.push(resp);
      this.DayObj = {id: this.Day[0]._id}
     // console.log('body ', this.Day[0]._id)
      this.api.postSpecificResource('api/packages', this.id, 'days', this.DayObj)
      .subscribe( resp=>{
        //console.log('the fuck ', resp)
        this.clearForm()
      })


    }
    )
  }
  createForm(){
   // console.log('creating')
    this.createDayForm = this.fb.group({
     title: ['', [Validators.required]],
     desc: ['', [Validators.required]]
   }) 
  }

  getPackage(){
    this.api.getSpecificResource('api/packages', this.id)
    .subscribe(resp=> {this.Package.push(resp)})
  }

  clearForm(){
    //console.log('clear')
    this.createDayForm.reset({
     'title': '',
      'desc ': ''

    })
  }
  deleteDay(id){
    console.log(id)
    this.api.deleteResource('api/days', id)
    .subscribe(resp=>   location.reload())
  }

}
