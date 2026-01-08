import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShelveLocationComponent } from './order-shelve-location.component';

describe('OrderShelveLocationComponent', () => {
  let component: OrderShelveLocationComponent;
  let fixture: ComponentFixture<OrderShelveLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderShelveLocationComponent]
    });
    fixture = TestBed.createComponent(OrderShelveLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
