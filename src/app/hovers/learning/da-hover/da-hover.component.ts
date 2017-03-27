import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';
import { SidenavService }    from '../../../services/sidenav.service';

@Component({
  selector: 'da-hover',
  templateUrl: './da-hover.component.html',
  styleUrls: ['./da-hover.component.css']
})
export class DaHover implements OnInit {

  constructor(public dialogRef: MdDialogRef<DaHover>,
              public _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleAppendix(){
    this._sidenavService.sidenav.toggle();
    this._sidenavService.setBoolean(true);
  }
}
