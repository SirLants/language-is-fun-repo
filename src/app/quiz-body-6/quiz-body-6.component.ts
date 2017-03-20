import { Component, OnInit } from '@angular/core';
import { QuizService }          from "../services/quiz.service";

@Component({
  selector: 'app-quiz-body-6',
  templateUrl: './quiz-body-6.component.html',
  styleUrls: ['./quiz-body-6.component.css']
})
export class QuizBody6Component implements OnInit {
  quizProgress:number = 5;

  constructor(private _quizService: QuizService) {
    
  }

  ngOnInit() {
    this._quizService.insertData(this.quizProgress);
  }
}
