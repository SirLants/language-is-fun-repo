import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreen1Component } from './quiz-screen-1.component';

describe('QuizScreen1Component', () => {
  let component: QuizScreen1Component;
  let fixture: ComponentFixture<QuizScreen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizScreen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
