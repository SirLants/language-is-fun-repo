import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningScreen3Component } from './learning-screen-3.component';

describe('LearningScreen3Component', () => {
  let component: LearningScreen3Component;
  let fixture: ComponentFixture<LearningScreen3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningScreen3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
