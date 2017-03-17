import { Component, OnInit }      from '@angular/core';
import { MdDialogRef }            from '@angular/material';

@Component({
  selector: 'not-implemented-dialog',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.css']
})
export class NotImplementedDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<NotImplementedDialog>) { }

  ngOnInit() {
  }

}
