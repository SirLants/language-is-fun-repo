import { Component, OnInit }  from '@angular/core';
import { Subject }            from 'rxjs/Rx';
import { QuizService }        from '../services/quiz.service';

@Component({
  selector: 'quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.css']
})
export class QuizBodyComponent implements OnInit {
  quizProgress:number = 0;

  constructor(private _quizService: QuizService) {
    
  }

  ngOnInit() {
    this._quizService.insertData(this.quizProgress);
  }
}
