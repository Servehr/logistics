import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSettingsComponent } from './orders-settings.component';

describe('OrdersSettingsComponent', () => {
  let component: OrdersSettingsComponent;
  let fixture: ComponentFixture<OrdersSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersSettingsComponent]
    });
    fixture = TestBed.createComponent(OrdersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
