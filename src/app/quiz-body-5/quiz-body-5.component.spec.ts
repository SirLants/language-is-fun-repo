import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBody5Component } from './quiz-body-5.component';

describe('QuizBody5Component', () => {
  let component: QuizBody5Component;
  let fixture: ComponentFixture<QuizBody5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBody5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBody5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
