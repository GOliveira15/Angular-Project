import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymMembersListComponent } from './gym-members-list.component';

describe('GymMembersListComponent', () => {
  let component: GymMembersListComponent;
  let fixture: ComponentFixture<GymMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymMembersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
