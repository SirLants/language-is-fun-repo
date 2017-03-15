import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBody3Component } from './quiz-body-3.component';

describe('QuizBody3Component', () => {
  let component: QuizBody3Component;
  let fixture: ComponentFixture<QuizBody3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBody3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBody3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
