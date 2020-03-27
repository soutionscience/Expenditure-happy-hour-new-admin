import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/SERViCES/api.service';

@Component({
  selector: 'app-new-day',
  templateUrl: './new-day.component.html',
  styleUrls: ['./new-day.component.scss']
})
export class NewDayComponent implements OnInit {
   newDays =[];
   createDayForm : FormGroup
   

  constructor(private route:ActivatedRoute, private fb: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.createForm();
   const id = this.route.snapshot.params['id'];
   
  }

  save(){
    this.newDays.push(this.createDayForm.value)
    console.log('wait ', this.createDayForm.value)
    console.log('new days', this.newDays)

  }
  createForm(){
    console.log('creating')
    this.createDayForm = this.fb.group({
     title: ['', [Validators.required]],
     desc: ['', [Validators.required]]
   }) 
  }

}
