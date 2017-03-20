import { Component, OnInit } from '@angular/core';
import { QuizService }          from "../services/quiz.service";

@Component({
  selector: 'app-quiz-body-4',
  templateUrl: './quiz-body-4.component.html',
  styleUrls: ['./quiz-body-4.component.css']
})
export class QuizBody4Component implements OnInit {
  quizProgress:number = 3;

  constructor(private _quizService: QuizService) {
    
  }

  ngOnInit() {
    this._quizService.insertData(this.quizProgress);
  }
}
