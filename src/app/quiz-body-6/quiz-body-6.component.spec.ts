import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBody6Component } from './quiz-body-6.component';

describe('QuizBody6Component', () => {
  let component: QuizBody6Component;
  let fixture: ComponentFixture<QuizBody6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBody6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBody6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
