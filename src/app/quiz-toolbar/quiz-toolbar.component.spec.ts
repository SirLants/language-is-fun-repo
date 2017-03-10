import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizToolbarComponent } from './quiz-toolbar.component';

describe('QuizToolbarComponent', () => {
  let component: QuizToolbarComponent;
  let fixture: ComponentFixture<QuizToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
