import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/controls/input-field/input-field.component';
import { AlertComponent } from './components/alert/alert.component';

import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ButtonComponent } from './components/controls/button/button.component';
import { ValidationErrorsComponent } from './util/validation-errors/validation-errors.component';
import { RadioValidationErrorsComponent } from './util/controls/radio-validation-errors/radio-validation-errors.component';
import { CheckBoxValidationErrorsComponent } from './util/controls/check-box-validation-errors/check-box-validation-errors.component';
import { SelectOptionValidationErrorsComponent } from './util/controls/select-option-validation-errors/select-option-validation-errors.component';
import { TextAreaValidationErrorsComponent } from './util/controls/text-area-validation-errors/text-area-validation-errors.component';
import { LogoComponent } from './shared/logo/logo.component';
import { TableComponent } from './components/controls/table/table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ImagePictureComponent } from './components/controls/image-picture/image-picture.component';
import { LabelComponent } from './components/controls/label/label.component';
import { SelectOptionComponent } from './components/controls/select-option/select-option.component';
import { TextAreaComponent } from './components/controls/text-area/text-area.component';
import { SwitchComponent } from './components/switch/switch.component';
import { CheckBoxComponent } from './components/controls/check-box/check-box.component';
import { RadioBoxComponent } from './components/controls/radio-box/radio-box.component';


@NgModule({
  declarations: [
    ValidationErrorsComponent,
    RadioValidationErrorsComponent,
    CheckBoxValidationErrorsComponent,
    SelectOptionValidationErrorsComponent,
    AlertComponent,
    SpinnerComponent,
    TableComponent,
    DialogComponent,
    ImagePictureComponent,
    LabelComponent,
    SelectOptionComponent,
    InputFieldComponent,
    TextAreaComponent,
    ButtonComponent,
    SwitchComponent,
    CheckBoxComponent,
    RadioBoxComponent,
    TextAreaValidationErrorsComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ValidationErrorsComponent,
    SwitchComponent,
    RadioValidationErrorsComponent,
    CheckBoxValidationErrorsComponent,
    SelectOptionValidationErrorsComponent,
    TextAreaValidationErrorsComponent,
    InputFieldComponent,
    TextAreaComponent,
    CheckBoxComponent,
    RadioBoxComponent,
    ButtonComponent,
    TableComponent,
    DialogComponent,
    ImagePictureComponent,
    LabelComponent,
    SelectOptionComponent,
    AlertComponent,
    SpinnerComponent,
    CommonModule,
    LogoComponent
  ]
})
export class SharedModule { }
