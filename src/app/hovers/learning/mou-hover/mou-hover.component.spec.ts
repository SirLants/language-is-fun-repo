import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouHover } from './mou-hover.component';

describe('MouHover', () => {
  let component: MouHover;
  let fixture: ComponentFixture<MouHover>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouHover ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouHover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
