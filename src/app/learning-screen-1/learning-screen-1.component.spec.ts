import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningScreen1Component } from './learning-screen-1.component';

describe('LearningScreen1Component', () => {
  let component: LearningScreen1Component;
  let fixture: ComponentFixture<LearningScreen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningScreen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
