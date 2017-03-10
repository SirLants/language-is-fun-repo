import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningToolbarComponent } from './learning-toolbar.component';

describe('LearningToolbarComponent', () => {
  let component: LearningToolbarComponent;
  let fixture: ComponentFixture<LearningToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
