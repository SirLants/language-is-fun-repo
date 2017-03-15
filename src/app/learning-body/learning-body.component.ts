import { Component, OnInit } from '@angular/core';
import { MdDialog }          from '@angular/material';

@Component({
  selector: 'learning-body',
  templateUrl: './learning-body.component.html',
  styleUrls: ['./learning-body.component.css']
})
export class LearningBodyComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog1',
  template:`
    <md-dialog-content>
      Can you read the panel to the left? If you can already read all of the words in this panel, click "I can read it!", and we'll
      do a quick quiz to make sure you are ready to go! If not, click "I'm ready to learn!" and we'll start learning
      how to read a Japanese Manga panel!
    </md-dialog-content>
  `
})
export class DialogComponent {}