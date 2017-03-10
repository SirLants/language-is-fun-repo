import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBodyComponent } from './learning-body.component';

describe('LearningBodyComponent', () => {
  let component: LearningBodyComponent;
  let fixture: ComponentFixture<LearningBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
