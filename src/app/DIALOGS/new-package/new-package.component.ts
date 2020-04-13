import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/SERViCES/api.service';
import { ImageUploadComponent } from 'src/app/ELEMENTS/image-upload/image-upload.component';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.scss']
})
export class NewPackageComponent implements OnInit {
  CreatePackageForm: FormGroup
   showForm: Boolean;
  imageUrl: string

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NewPackageComponent>,
    private api: ApiService) { }

  ngOnInit(): void {
    this.createForm()
    this.showForm = false;
  }

  createForm(){
    this.CreatePackageForm = this.fb.group({
      title: ['', [Validators.required]],
      shortDesc: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      Type: [false, [Validators.required]],
      featured: [false, [Validators.required]],
      image: ['', [Validators.required]],
      multiDay: [false,[Validators.required]],
      cost:['', [Validators.required]]

    })
  }
  submit(){
    this.CreatePackageForm.value.image = this.imageUrl;
    this.api.postResource('api/packages', this.CreatePackageForm.value)
    .subscribe(resp=>{
      //console.log('resp from server ', resp)
      this.dialogRef.close();
     // location.reload();
    })
  }

  receiveUrl($event){
    this.imageUrl= $event
    this.CreatePackageForm.value.image = this.imageUrl;
     this.showForm = true
    }

}
