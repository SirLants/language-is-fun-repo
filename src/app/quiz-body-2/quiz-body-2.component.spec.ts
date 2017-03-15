import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBody2Component } from './quiz-body-2.component';

describe('QuizBody2Component', () => {
  let component: QuizBody2Component;
  let fixture: ComponentFixture<QuizBody2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBody2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
