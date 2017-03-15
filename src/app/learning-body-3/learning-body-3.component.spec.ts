import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBody3Component } from './learning-body-3.component';

describe('LearningBody3Component', () => {
  let component: LearningBody3Component;
  let fixture: ComponentFixture<LearningBody3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBody3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBody3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
