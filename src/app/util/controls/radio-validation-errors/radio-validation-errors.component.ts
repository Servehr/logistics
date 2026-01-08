import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { RadioBoxComponent } from 'src/app/components/controls/radio-box/radio-box.component';


@Component({
  selector: 'radio-validation-errors',
  templateUrl: './radio-validation-errors.component.html',
  styleUrls: ['./radio-validation-errors.component.css']
})
export class RadioValidationErrorsComponent<T> extends RadioBoxComponent implements OnChanges {
   
    @Input() errors: Record<string, ValidationErrors> | null = { };

    @Input() errorMessages: Record<string, string> = {
        radioBoxRequired: 'Select either option'
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
