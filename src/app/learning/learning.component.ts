import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService }               from '../services/sidenav.service';

@Component({
  selector: 'learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  @ViewChild('appendix') public sidenav;
  public appendixArrow:string;

  constructor(public _sidenavService: SidenavService) {
    
  }


  ngOnInit() {
    this._sidenavService.sidenav = this.sidenav;
  }

  toggleAppendix(){
    this._sidenavService.sidenav.toggle();
    this._sidenavService.setBoolean(true);
  }
}
