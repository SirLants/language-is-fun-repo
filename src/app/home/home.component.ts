import { Component, OnInit } 		 from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Language Is Fun!';

  constructor() { }

  ngOnInit() {
  }

}