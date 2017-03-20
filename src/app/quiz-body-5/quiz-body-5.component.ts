import { Component, OnInit } from '@angular/core';
import { QuizService }          from "../services/quiz.service";

@Component({
  selector: 'app-quiz-body-5',
  templateUrl: './quiz-body-5.component.html',
  styleUrls: ['./quiz-body-5.component.css']
})
export class QuizBody5Component implements OnInit {
  quizProgress:number = 4;

  constructor(private _quizService: QuizService) {
    
  }

  ngOnInit() {
    this._quizService.insertData(this.quizProgress);
  }
}
