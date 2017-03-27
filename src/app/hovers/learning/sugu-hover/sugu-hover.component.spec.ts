import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuguHover } from './sugu-hover.component';

describe('SuguHover', () => {
  let component: SuguHover;
  let fixture: ComponentFixture<SuguHover>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuguHover ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuguHover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
