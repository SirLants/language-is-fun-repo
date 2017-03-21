import { Component, OnInit } from '@angular/core';
import { SidenavService }     from '../services/sidenav.service';

@Component({
  selector: 'appendix',
  templateUrl: './appendix.component.html',
  styleUrls: ['./appendix.component.css']
})
export class AppendixComponent implements OnInit {

  public showButton:boolean;

  constructor(private _sidenavService: SidenavService) { }

  public toggleAppendix() {
    this._sidenavService.sidenav.toggle();
  }

  ngOnInit() {
    this._sidenavService.boolean$.subscribe(
      subVal => {
        this.showButton = subVal;
      }
    )
  }

}
