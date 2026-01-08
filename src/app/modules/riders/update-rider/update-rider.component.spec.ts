import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiderComponent } from './update-rider.component';

describe('UpdateRiderComponent', () => {
  let component: UpdateRiderComponent;
  let fixture: ComponentFixture<UpdateRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRiderComponent]
    });
    fixture = TestBed.createComponent(UpdateRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
