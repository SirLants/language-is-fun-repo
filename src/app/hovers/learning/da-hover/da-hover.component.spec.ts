import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaHover } from './da-hover.component';

describe('DaHover', () => {
  let component: DaHover;
  let fixture: ComponentFixture<DaHover>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaHover ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaHover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
