import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMerchantComponent } from './new-merchant.component';

describe('NewMerchantComponent', () => {
  let component: NewMerchantComponent;
  let fixture: ComponentFixture<NewMerchantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMerchantComponent]
    });
    fixture = TestBed.createComponent(NewMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
