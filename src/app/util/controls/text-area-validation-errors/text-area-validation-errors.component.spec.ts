import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaValidationErrorsComponent } from './text-area-validation-errors.component';

describe('TextAreaValidationErrorsComponent', () => {
  let component: TextAreaValidationErrorsComponent;
  let fixture: ComponentFixture<TextAreaValidationErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaValidationErrorsComponent]
    });
    fixture = TestBed.createComponent(TextAreaValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
