import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBody4Component } from './quiz-body-4.component';

describe('QuizBody4Component', () => {
  let component: QuizBody4Component;
  let fixture: ComponentFixture<QuizBody4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBody4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBody4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
