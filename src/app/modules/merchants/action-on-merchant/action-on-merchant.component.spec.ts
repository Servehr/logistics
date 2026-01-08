import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionOnMerchantComponent } from './action-on-merchant.component';

describe('ActionOnMerchantComponent', () => {
  let component: ActionOnMerchantComponent;
  let fixture: ComponentFixture<ActionOnMerchantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionOnMerchantComponent]
    });
    fixture = TestBed.createComponent(ActionOnMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
