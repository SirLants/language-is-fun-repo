import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SidenavService {
  //This contains all the attributes for the sidenav itself, set in learning
  public sidenav:any;

  private buttonBoolean = new Subject<boolean>();
  boolean$ = this.buttonBoolean.asObservable();
  setBoolean(setter: boolean){
    this.buttonBoolean.next(setter)
  }
  constructor() { }

}
