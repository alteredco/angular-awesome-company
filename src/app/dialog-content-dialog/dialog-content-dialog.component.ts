import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  taco: string;
}


@Component({
  selector: 'app-dialog-content-dialog',
  templateUrl: './dialog-content-dialog.component.html',
  styleUrls: ['./dialog-content-dialog.component.scss']
})
export class DialogContentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

}
