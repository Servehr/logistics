import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioValidationErrorsComponent } from './radio-validation-errors.component';

describe('RadioValidationErrorsComponent', () => {
  let component: RadioValidationErrorsComponent;
  let fixture: ComponentFixture<RadioValidationErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioValidationErrorsComponent]
    });
    fixture = TestBed.createComponent(RadioValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
