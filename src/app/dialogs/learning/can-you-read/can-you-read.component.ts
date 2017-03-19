import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';

@Component({
  selector: 'can-you-read-dialog',
  templateUrl: './can-you-read.component.html',
  styleUrls: ['./can-you-read.component.css']
})
export class CanYouReadDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<CanYouReadDialog>) { }

  ngOnInit() {
  }

}
