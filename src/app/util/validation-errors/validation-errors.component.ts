import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/control-value-accessor.directive';

@Component({
  selector: 'validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent<T> extends ControlValueAccessorDirective<T> implements OnChanges {
   
    @Input() errors: Record<string, ValidationErrors> | null = { };

    @Input() errorMessages: Record<string, string> =  {  }
    
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
