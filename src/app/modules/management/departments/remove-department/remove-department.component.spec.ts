import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDepartmentComponent } from './remove-department.component';

describe('RemoveDepartmentComponent', () => {
  let component: RemoveDepartmentComponent;
  let fixture: ComponentFixture<RemoveDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveDepartmentComponent]
    });
    fixture = TestBed.createComponent(RemoveDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
