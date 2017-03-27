import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';
import { SidenavService }    from '../../../services/sidenav.service';

@Component({
  selector: 'mou-hover',
  templateUrl: './mou-hover.component.html',
  styleUrls: ['./mou-hover.component.css']
})
export class MouHover implements OnInit {

  constructor(public dialogRef: MdDialogRef<MouHover>,
              public _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleAppendix(){
    this._sidenavService.sidenav.toggle();
    this._sidenavService.setBoolean(true);
  }
}
