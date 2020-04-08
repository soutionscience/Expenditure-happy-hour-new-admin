import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/SERViCES/api.service';
import { ImageUploadComponent } from 'src/app/ELEMENTS/image-upload/image-upload.component';

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.scss']
})
export class NewPackageComponent implements OnInit {
  CreatePackageForm: FormGroup

  imageUrl: string

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NewPackageComponent>,
    private api: ApiService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.CreatePackageForm = this.fb.group({
      title: ['', [Validators.required]],
      shortDesc: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      Type: [false, [Validators.required]],
      featured: [false, [Validators.required]],
      image: [false, [Validators.required]]

    })
  }
  submit(){

    this.api.postResource('api/packages', this.CreatePackageForm.value)
    .subscribe(resp=>{
      console.log('resp from server ', resp)
      this.dialogRef.close();
      location.reload();
    })
  }

  receiveUrl($event){
    this.imageUrl= $event
    this.CreatePackageForm.value.image = this.imageUrl;
   // console.log(  'received ',  this.CreatePackageForm.value.image = this.imageUrl)
    }

}
