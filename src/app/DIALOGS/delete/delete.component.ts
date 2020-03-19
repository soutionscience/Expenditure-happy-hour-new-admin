import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/SERViCES/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService) { }

  ngOnInit(): void {
    
  }

  cancel(){
    this.dialogRef.close()

  }
  delete(){
    this.api.deleteResource(this.data.route, this.data.id)
    .subscribe(resp=>{
      this.cancel()
      location.reload();

    })

  }

}
