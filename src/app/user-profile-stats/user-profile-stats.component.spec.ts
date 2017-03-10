import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileStatsComponent } from './user-profile-stats.component';

describe('UserProfileStatsComponent', () => {
  let component: UserProfileStatsComponent;
  let fixture: ComponentFixture<UserProfileStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
