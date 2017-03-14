import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreen2Component } from './quiz-screen-2.component';

describe('QuizScreen2Component', () => {
  let component: QuizScreen2Component;
  let fixture: ComponentFixture<QuizScreen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizScreen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
