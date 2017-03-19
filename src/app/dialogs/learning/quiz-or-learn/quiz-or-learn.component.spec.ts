import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOrLearnComponent } from './quiz-or-learn.component';

describe('QuizOrLearnComponent', () => {
  let component: QuizOrLearnComponent;
  let fixture: ComponentFixture<QuizOrLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizOrLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOrLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
