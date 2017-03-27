import { Component, OnInit } from '@angular/core';
import { MdDialogRef }       from '@angular/material';
import { SidenavService }    from '../../../services/sidenav.service';

@Component({
  selector: 'sugu-hover',
  templateUrl: './sugu-hover.component.html',
  styleUrls: ['./sugu-hover.component.css']
})
export class SuguHover implements OnInit {

  constructor(public dialogRef: MdDialogRef<SuguHover>,
              public _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  toggleAppendix(){
    this._sidenavService.sidenav.toggle();
    this._sidenavService.setBoolean(true);
  }
}
