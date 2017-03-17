import { Component, OnInit }      from '@angular/core';
import { DialogsService }         from '../services/dialogs.service';

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

  public result: any;

  constructor(private dialogsService: DialogsService) { }

  public openNotImplemented(){
    this.dialogsService
      .notImplemented()
      .subscribe(res => this.result = res);
  }

  ngOnInit() {
  }

}
