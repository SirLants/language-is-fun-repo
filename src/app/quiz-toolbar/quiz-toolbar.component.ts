import { Component, OnInit }    from '@angular/core';
import { DialogsService }       from "../services/dialogs.service";

@Component({
  selector: 'quiz-toolbar',
  templateUrl: './quiz-toolbar.component.html',
  styleUrls: ['./quiz-toolbar.component.css']
})
export class QuizToolbarComponent implements OnInit {
  public result:any;

  constructor(private dialogsService: DialogsService) { }

  public openGoHome() {
    this.dialogsService
      .goHome()
      .subscribe(res => this.result = res);
  }
  ngOnInit() {
  }

}
