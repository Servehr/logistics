import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLengthValidatorComponent } from './password-length-validator.component';

describe('PasswordLengthValidatorComponent', () => {
  let component: PasswordLengthValidatorComponent;
  let fixture: ComponentFixture<PasswordLengthValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordLengthValidatorComponent]
    });
    fixture = TestBed.createComponent(PasswordLengthValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
