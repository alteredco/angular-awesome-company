import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import{WorkerDetailComponent} from '../worker-detail/worker-detail.component'
import {DialogContentDialogComponent} from '../../dialog-content-dialog/dialog-content-dialog.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnInit {

  // @Input('name') workerName: string;
  // @Input('imgSrc') workerImg: string;
  id="9"
  name= "Marine Gauthier"
  imgSrc= "https://randomuser.me/api/portraits/lego/9.jpg"

  taco: string;
  private isButtonVisible = true;

  public badgeCount: number;
  durationInSeconds = 500;

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) { 
    this.badgeCount = 0;
  }

  addBadgeCount(){
    console.log(this.badgeCount);
    this.badgeCount+=1;
  }

  openSnackBar(){
    this._snackBar.open("It's Awesome!", "", {
      duration: this.durationInSeconds,
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialogComponent, {
      data: {taco: this.taco}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.taco = result;
      this.isButtonVisible=false;
    });
  }

  ngOnInit(){
  
  }

}
