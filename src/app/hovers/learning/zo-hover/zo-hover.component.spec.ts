import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoHover } from './zo-hover.component';

describe('ZoHover', () => {
  let component: ZoHover;
  let fixture: ComponentFixture<ZoHover>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoHover ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoHover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
