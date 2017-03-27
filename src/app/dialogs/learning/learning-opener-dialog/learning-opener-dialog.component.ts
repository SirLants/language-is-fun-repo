import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';

@Component({
  selector: 'learning-opener-dialog',
  templateUrl: './learning-opener-dialog.component.html',
  styleUrls: ['./learning-opener-dialog.component.css']
})
export class LearningOpenerDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<LearningOpenerDialog>) { }

  ngOnInit() {
  }

}
