import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRiderComponent } from './remove-rider.component';

describe('RemoveRiderComponent', () => {
  let component: RemoveRiderComponent;
  let fixture: ComponentFixture<RemoveRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveRiderComponent]
    });
    fixture = TestBed.createComponent(RemoveRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
