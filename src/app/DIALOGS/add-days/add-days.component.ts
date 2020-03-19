import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/SERViCES/api.service';

@Component({
  selector: 'app-add-days',
  templateUrl: './add-days.component.html',
  styleUrls: ['./add-days.component.scss']
})
export class AddDaysComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddDaysComponent>,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }


 save(){
   console.log('received ', this.data.id)
 }
  
  cancel(){
    this.dialogRef.close()

  }

}
