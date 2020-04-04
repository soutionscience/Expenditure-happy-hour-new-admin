import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERViCES/api.service';
import { ImageUploadService } from 'src/app/SERViCES/image-upload.service';
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


  constructor(private imageUploadService: ImageUploadService) { }

  ngOnInit(): void {
  }
  processFIle(imageInput: any){
   // debugger;
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any)=>{
     // debugger;
      this.selectedFile = new ImageSnippet(event.target.result, file)

      this.imageUploadService.uploadImage(this.selectedFile.file)
      .subscribe(resp=>{
        console.log('send successfully ', resp)
      }, (error)=>{
     console.log("ERROR", error)
      })

    })
    reader.readAsDataURL(file)


  }

}
