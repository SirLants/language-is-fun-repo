import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnhoverReminderDialog } from './onhover-reminder-dialog.component';

describe('OnhoverReminderDialog', () => {
  let component: OnhoverReminderDialog;
  let fixture: ComponentFixture<OnhoverReminderDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnhoverReminderDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnhoverReminderDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
