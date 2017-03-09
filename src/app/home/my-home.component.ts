import { Component, OnInit } 		 from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  title = 'Language Is Fun!';

  direction = "row";

   toggleDirection() {
     let next = (DIRECTIONS.indexOf(this.direction) +1 ) % DIRECTIONS.length;
     this.direction = DIRECTIONS[next];
   }
  constructor() { }

  ngOnInit() {
  }

}
const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
