import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionOnRiderComponent } from './action-on-rider.component';

describe('ActionOnRiderComponent', () => {
  let component: ActionOnRiderComponent;
  let fixture: ComponentFixture<ActionOnRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionOnRiderComponent]
    });
    fixture = TestBed.createComponent(ActionOnRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
