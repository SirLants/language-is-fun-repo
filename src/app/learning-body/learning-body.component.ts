import { Component, OnInit, ViewContainerRef }              from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig }            from '@angular/material';
import { DialogsService }         from '../services/dialogs.service';


@Component({
  selector: 'learning-body',
  templateUrl: './learning-body.component.html',
  styleUrls: ['./learning-body.component.css']
})
export class LearningBodyComponent implements OnInit {
  
  public result:any;

  constructor(private dialogsService:DialogsService) { }

  openCanYouRead() {
    this.dialogsService
      .canYouRead()
      .subscribe(res => this.result = res);
  }

  ngOnInit() {
  }

}