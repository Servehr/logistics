import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRiderComponent } from './new-rider.component';

describe('NewRiderComponent', () => {
  let component: NewRiderComponent;
  let fixture: ComponentFixture<NewRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRiderComponent]
    });
    fixture = TestBed.createComponent(NewRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
