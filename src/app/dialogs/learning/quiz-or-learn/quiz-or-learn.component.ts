import { Component, OnInit } from '@angular/core';
import { MdDialogRef }      from '@angular/material';

@Component({
  selector: 'quiz-or-learn-dialog',
  templateUrl: './quiz-or-learn.component.html',
  styleUrls: ['./quiz-or-learn.component.css']
})
export class QuizOrLearnDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<QuizOrLearnDialog>) { }

  ngOnInit() {
  }

}
