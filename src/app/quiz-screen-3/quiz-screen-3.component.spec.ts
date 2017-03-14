import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreen3Component } from './quiz-screen-3.component';

describe('QuizScreen3Component', () => {
  let component: QuizScreen3Component;
  let fixture: ComponentFixture<QuizScreen3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizScreen3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
