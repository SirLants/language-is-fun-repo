import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningScreen2Component } from './learning-screen-2.component';

describe('LearningScreen2Component', () => {
  let component: LearningScreen2Component;
  let fixture: ComponentFixture<LearningScreen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningScreen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
