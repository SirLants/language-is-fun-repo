import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  public hxh_words:number = 300;
  public hxh_total:number = 500;
  public hxh_progress:number = ((this.hxh_words/this.hxh_total)*100);
  public yots_words:number = 200;
  public yots_total:number = 200;
  public yots_progress:number = ((this.yots_words/this.yots_total)*100);

  constructor() { }

  ngOnInit() {
  }

}
