import { Component, OnInit }      from '@angular/core';
import { MdDialogRef }            from '@angular/material';

@Component({
  selector: 'go-home-dialog',
  templateUrl: './go-home.component.html',
  styleUrls: ['./go-home.component.css']
})
export class GoHomeDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<GoHomeDialog>) { }

  ngOnInit() {
  }

}
