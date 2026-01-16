import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStockApprovalComponent } from './inventory-stock-approval.component';

describe('InventoryStockApprovalComponent', () => {
  let component: InventoryStockApprovalComponent;
  let fixture: ComponentFixture<InventoryStockApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryStockApprovalComponent]
    });
    fixture = TestBed.createComponent(InventoryStockApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
