import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockApprovalComponent } from './stock-approval.component';

describe('StockApprovalComponent', () => {
  let component: StockApprovalComponent;
  let fixture: ComponentFixture<StockApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockApprovalComponent]
    });
    fixture = TestBed.createComponent(StockApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
