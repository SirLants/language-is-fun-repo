import { Component, OnInit }      from '@angular/core';
import { DialogsService }         from '../services/dialogs.service';

@Component({
  selector: 'learning-toolbar',
  templateUrl: './learning-toolbar.component.html',
  styleUrls: ['./learning-toolbar.component.css']
})
export class LearningToolbarComponent implements OnInit {
  
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
