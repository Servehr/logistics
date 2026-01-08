import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionValidationErrorsComponent } from './select-option-validation-errors.component';

describe('SelectOptionValidationErrorsComponent', () => {
  let component: SelectOptionValidationErrorsComponent;
  let fixture: ComponentFixture<SelectOptionValidationErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectOptionValidationErrorsComponent]
    });
    fixture = TestBed.createComponent(SelectOptionValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
