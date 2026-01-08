import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxValidationErrorsComponent } from './check-box-validation-errors.component';

describe('CheckBoxValidationErrorsComponent', () => {
  let component: CheckBoxValidationErrorsComponent;
  let fixture: ComponentFixture<CheckBoxValidationErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBoxValidationErrorsComponent]
    });
    fixture = TestBed.createComponent(CheckBoxValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
