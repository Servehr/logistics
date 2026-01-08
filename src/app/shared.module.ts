import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/controls/input-field/input-field.component';
import { AlertComponent } from './components/alert/alert.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ButtonComponent } from './components/controls/button/button.component';
import { ValidationErrorsComponent } from './util/validation-errors/validation-errors.component';
import { RadioBoxComponent } from './components/controls/radio-box/radio-box.component';
import { RadioValidationErrorsComponent } from './util/controls/radio-validation-errors/radio-validation-errors.component';
import { CheckBoxValidationErrorsComponent } from './util/controls/check-box-validation-errors/check-box-validation-errors.component';
import { SelectOptionComponent } from './components/controls/select-option/select-option.component';
import { SelectOptionValidationErrorsComponent } from './util/controls/select-option-validation-errors/select-option-validation-errors.component';
import { TextAreaValidationErrorsComponent } from './util/controls/text-area-validation-errors/text-area-validation-errors.component';
import { LogoComponent } from './shared/logo/logo.component';


@NgModule({
  declarations: [
    ValidationErrorsComponent,
    RadioValidationErrorsComponent,
    CheckBoxValidationErrorsComponent,
    SelectOptionValidationErrorsComponent,
    SelectOptionComponent,
    InputFieldComponent,
    AlertComponent,
    SpinnerComponent,
    ButtonComponent,
    RadioBoxComponent,
    TextAreaValidationErrorsComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ValidationErrorsComponent,
    RadioValidationErrorsComponent,
    CheckBoxValidationErrorsComponent,
    SelectOptionValidationErrorsComponent,
    TextAreaValidationErrorsComponent,
    LogoComponent,
    SelectOptionComponent,
    InputFieldComponent,
    RadioBoxComponent,
    ButtonComponent,
    AlertComponent,
    SpinnerComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
