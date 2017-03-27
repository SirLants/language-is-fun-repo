import { Component, OnInit } from '@angular/core';
import { MdDialogRef }        from '@angular/material';

@Component({
  selector: 'onhover-reminder-dialog',
  templateUrl: './onhover-reminder-dialog.component.html',
  styleUrls: ['./onhover-reminder-dialog.component.css']
})
export class OnhoverReminderDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<OnhoverReminderDialog>) { }

  ngOnInit() {
  }

}
