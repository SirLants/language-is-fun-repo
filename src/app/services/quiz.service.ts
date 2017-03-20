import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class QuizService {

  private dataNumberSource = new Subject<number>();

  // Observable string stream
  dataNumber$ = this.dataNumberSource.asObservable();

  // Service message commands
  insertData(data: number) {
    this.dataNumberSource.next(data)
  }
}
