import { Component, OnInit } from '@angular/core';
import { QuizService }          from "../services/quiz.service";

@Component({
  selector: 'app-quiz-body-3',
  templateUrl: './quiz-body-3.component.html',
  styleUrls: ['./quiz-body-3.component.css']
})
export class QuizBody3Component implements OnInit {

  quizProgress:number = 2;

  constructor(private _quizService: QuizService) {
    
  }

  ngOnInit() {
    this._quizService.insertData(this.quizProgress);
  }
}
