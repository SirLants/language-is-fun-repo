import { Component, OnInit }    from '@angular/core';
import { DialogsService }       from "../services/dialogs.service";
import { QuizService }          from "../services/quiz.service";

@Component({
  selector: 'quiz-toolbar',
  templateUrl: './quiz-toolbar.component.html',
  styleUrls: ['./quiz-toolbar.component.css']
})
export class QuizToolbarComponent implements OnInit {

  public quizProgress: number;

  public result:any;

  constructor(private _dialogsService: DialogsService, 
              private _quizService: QuizService) { }

  ngOnInit() {
    this._quizService.dataNumber$.subscribe(
      data => {
        this.quizProgress = ((data/6)*100); 
      });
  }

  public openGoHome() {
    this._dialogsService
      .goHome()
      .subscribe(res => this.result = res);
  }
}
