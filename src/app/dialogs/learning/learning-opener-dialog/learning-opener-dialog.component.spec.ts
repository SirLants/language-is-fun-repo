import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOpenerDialog } from './learning-opener-dialog.component';

describe('LearningOpenerDialog', () => {
  let component: LearningOpenerDialog;
  let fixture: ComponentFixture<LearningOpenerDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningOpenerDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningOpenerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
