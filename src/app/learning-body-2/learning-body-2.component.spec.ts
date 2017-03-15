import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBody2Component } from './learning-body-2.component';

describe('LearningBody2Component', () => {
  let component: LearningBody2Component;
  let fixture: ComponentFixture<LearningBody2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBody2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
