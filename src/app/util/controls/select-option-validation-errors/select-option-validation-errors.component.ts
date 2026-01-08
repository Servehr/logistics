import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { SelectOptionComponent } from 'src/app/components/controls/select-option/select-option.component';


@Component({
  selector: 'select-option-validation-errors',
  templateUrl: './select-option-validation-errors.component.html',
  styleUrls: ['./select-option-validation-errors.component.css']
})
export class SelectOptionValidationErrorsComponent<T> extends SelectOptionComponent implements OnChanges {
   
    @Input() errors: Record<string, ValidationErrors> | null = { };

    @Input() errorMessages: Record<string, string> = {
        selectionRequired: 'Select an option'
    }
    
    @Input() customErrorMessages: Record<string, string> = { }

    ngOnChanges(changes: SimpleChanges): void 
    {
       const { customErrorMessages } = changes
       console.log(customErrorMessages)
       if(customErrorMessages)
       {
          this.errorMessages = 
          {
             ...this.errorMessages, ...customErrorMessages.currentValue
          }
       }  
    }


}