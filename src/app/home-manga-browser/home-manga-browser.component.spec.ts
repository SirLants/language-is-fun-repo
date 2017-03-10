import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMangaBrowserComponent } from './home-manga-browser.component';

describe('MangaBrowserComponent', () => {
  let component: HomeMangaBrowserComponent;
  let fixture: ComponentFixture<HomeMangaBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMangaBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMangaBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
