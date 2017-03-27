import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenderHover } from './extender-hover.component';

describe('ExtenderHover', () => {
  let component: ExtenderHover;
  let fixture: ComponentFixture<ExtenderHover>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtenderHover ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtenderHover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
