import { Component, OnInit } from '@angular/core';
import { DialogsService }         from '../services/dialogs.service';
import { HoverService }           from '../services/hover.service';

@Component({
  selector: 'app-learning-body-2',
  templateUrl: './learning-body-2.component.html',
  styleUrls: ['./learning-body-2.component.css']
})
export class LearningBody2Component implements OnInit {

  public isJapanese:boolean=true;
  public japaneseLink:string = "/src/assets/images/japanese_snippet.png";
  public englishLink:string = "/src/assets/images/english_snippet.png";
  public activeLink:string = this.japaneseLink;

  public result:any;

  constructor(private dialogsService:DialogsService,
              private hoverService:HoverService) { }
  
  openQuizOrLearn() {
    this.dialogsService
      .quizOrLearn()
      .subscribe(res => this.result = res);
  }

  openMouHover() {
    this.hoverService
      .mouHover()
      .subscribe(res => this.result = res);
  }

  openSuguHover() {
    this.hoverService
      .suguHover()
      .subscribe(res => this.result = res);
  }

  openDaHover() {
    this.hoverService
      .daHover()
      .subscribe(res => this.result = res);
  }

  openZoHover() {
    this.hoverService
      .zoHover()
      .subscribe(res => this.result = res);
  }

  openExtenderHover() {
    this.hoverService
      .extenderHover()
      .subscribe(res => this.result = res);
  }

  flipLanguage(){
    if(this.isJapanese){
      this.isJapanese = false;
      this.activeLink = this.englishLink;
    }
    else {
      this.isJapanese = true;
      this.activeLink = this.japaneseLink;
    }
  }

  ngOnInit() {
  }

}
