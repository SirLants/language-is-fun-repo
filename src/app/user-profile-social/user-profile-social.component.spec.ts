import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSocialComponent } from './user-profile-social.component';

describe('UserProfileSocialComponent', () => {
  let component: UserProfileSocialComponent;
  let fixture: ComponentFixture<UserProfileSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
