import { Component, OnInit, ViewContainerRef }              from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig }            from '@angular/material';
import { CanYouReadDialog }                                  from '../dialogs/learning/can-you-read/can-you-read.component';

@Component({
  selector: 'learning-body',
  templateUrl: './learning-body.component.html',
  styleUrls: ['./learning-body.component.css']
})
export class LearningBodyComponent implements OnInit {
  dialogRef: MdDialogRef<any>;

  constructor(
    public dialog: MdDialog,
    public viewContainerRef: ViewContainerRef) { }

  openDialog(key) {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(CanYouReadDialog, config);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

  ngOnInit() {
  }

}