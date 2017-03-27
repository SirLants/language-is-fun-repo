import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';
import { SidenavService }    from '../../../services/sidenav.service';

@Component({
  selector: 'extender-hover',
  templateUrl: './extender-hover.component.html',
  styleUrls: ['./extender-hover.component.css']
})
export class ExtenderHover implements OnInit {

  constructor(public dialogRef: MdDialogRef<ExtenderHover>,
              public _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleAppendix(){
    this._sidenavService.sidenav.toggle();
    this._sidenavService.setBoolean(true);
  }
}
