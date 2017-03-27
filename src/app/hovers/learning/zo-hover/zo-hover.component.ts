import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';
import { SidenavService }    from '../../../services/sidenav.service';

@Component({
  selector: 'zo-hover',
  templateUrl: './zo-hover.component.html',
  styleUrls: ['./zo-hover.component.css']
})
export class ZoHover implements OnInit {

  constructor(public dialogRef: MdDialogRef<ZoHover>,
              public _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleAppendix(){
    this._sidenavService.sidenav.toggle();
    this._sidenavService.setBoolean(true);
  }
}
