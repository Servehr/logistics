
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { CheckBoxComponent } from 'src/app/components/controls/check-box/check-box.component';


@Component({
  selector: 'check-box-validation-errors',
  templateUrl: './check-box-validation-errors.component.html',
  styleUrls: ['./check-box-validation-errors.component.css']
})
export class CheckBoxValidationErrorsComponent<T> extends CheckBoxComponent implements OnChanges {
   
    @Input() errors: Record<string, ValidationErrors> | null = { };

    @Input() errorMessages: Record<string, string> = {
        checkBoxRequired: 'Select option'
    }
    
    @Input() customErrorMessages: Record<string, string> = { }

    ngOnChanges(changes: SimpleChanges): void 
    {
       const { customErrorMessages } = changes
       if(customErrorMessages)
       {
          this.errorMessages = 
          {
             ...this.errorMessages, ...customErrorMessages.currentValue
          }
       }  
    }


}




