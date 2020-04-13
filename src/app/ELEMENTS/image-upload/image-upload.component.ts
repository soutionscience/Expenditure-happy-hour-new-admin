import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/SERViCES/api.service';
import { ImageUploadService } from 'src/app/SERViCES/image-upload.service';
//import { EventEmitter } from 'protractor';
//import { read } from 'fs';

class ImageSnippet {
  constructor(public src: string, public file: File) {
    
  }
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  selectedFile: ImageSnippet
  imageUrl : string;
  imageUploaded: Boolean
  //@Output() example= new EventEmitter()
 @Output() imageEvent = new EventEmitter<string>();



  constructor(private imageUploadService: ImageUploadService) { }

  ngOnInit(): void {
   // console.log('started')
   this.imageUploaded = false
  }
  processFIle(imageInput: any){
    //console.log('process file')
   // debugger;
   this.imageUploaded = true;
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any)=>{
     // debugger;
      this.selectedFile = new ImageSnippet(event.target.result, file)

      this.imageUploadService.uploadImage(this.selectedFile.file)
      .subscribe(resp=>{
        this.imageUploaded = false
       this.imageUrl = resp.url
       
      // console.log(this.imageUrl)
      this.imageEvent.emit(this.imageUrl)
      }, (error)=>{
     console.log("ERROR", error)
      })

    })
    reader.readAsDataURL(file)


  }

}
