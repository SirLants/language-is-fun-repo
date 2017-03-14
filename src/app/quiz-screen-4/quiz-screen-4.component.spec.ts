import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreen4Component } from './quiz-screen-4.component';

describe('QuizScreen4Component', () => {
  let component: QuizScreen4Component;
  let fixture: ComponentFixture<QuizScreen4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizScreen4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScreen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
