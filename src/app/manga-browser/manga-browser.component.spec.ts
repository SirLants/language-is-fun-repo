import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaBrowserComponent } from './manga-browser.component';

describe('MangaBrowserComponent', () => {
  let component: MangaBrowserComponent;
  let fixture: ComponentFixture<MangaBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
