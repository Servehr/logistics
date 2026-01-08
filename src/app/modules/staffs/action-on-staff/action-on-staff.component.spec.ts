import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionOnStaffComponent } from './action-on-staff.component';

describe('ActionOnStaffComponent', () => {
  let component: ActionOnStaffComponent;
  let fixture: ComponentFixture<ActionOnStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionOnStaffComponent]
    });
    fixture = TestBed.createComponent(ActionOnStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
