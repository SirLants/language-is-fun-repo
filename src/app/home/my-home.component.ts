import { Component, OnInit } 		 from '@angular/core';

import { NgbModule }                 from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  title = 'Language Is Fun!';

  constructor() { }

  ngOnInit() {
  }

}
