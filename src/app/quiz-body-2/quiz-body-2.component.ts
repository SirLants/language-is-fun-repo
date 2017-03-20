import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { QuizService }          from "../services/quiz.service";

@Component({
  selector: 'app-quiz-body-2',
  templateUrl: './quiz-body-2.component.html',
  styleUrls: ['./quiz-body-2.component.css']
})
export class QuizBody2Component implements OnInit {
  quizProgress:number = 1;

  constructor(private _quizService: QuizService) {
    
  }

  ngOnInit() {
    this._quizService.insertData(this.quizProgress);
  }
}
