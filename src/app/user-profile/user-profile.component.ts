import { Component, OnInit }      from '@angular/core';
import { DialogsService }         from '../services/dialogs.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public result: any;

  constructor(private dialogsService: DialogsService) { }

  openNotImplemented(){
    this.dialogsService
      .notImplemented()
      .subscribe(res => this.result = res);
  }

  ngOnInit() {
  }

}
