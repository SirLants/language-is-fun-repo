import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppendixComponent } from './home-appendix.component';

describe('HomeAppendixComponent', () => {
  let component: HomeAppendixComponent;
  let fixture: ComponentFixture<HomeAppendixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAppendixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAppendixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
