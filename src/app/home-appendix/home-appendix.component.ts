import { Component, OnInit } from '@angular/core';
import { SidenavService }    from '../services/sidenav.service';

@Component({
  selector: 'app-home-appendix',
  templateUrl: './home-appendix.component.html',
  styleUrls: ['./home-appendix.component.css']
})
export class HomeAppendixComponent implements OnInit {

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
    this._sidenavService.setBoolean(false);
  }

}
