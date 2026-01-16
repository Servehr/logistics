import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { TextAreaComponent } from 'src/app/components/controls/text-area/text-area.component';

@Component({
  selector: 'text-area-validation-errors',
  templateUrl: './text-area-validation-errors.component.html',
  styleUrls: ['./text-area-validation-errors.component.css']
})
export class TextAreaValidationErrorsComponent extends TextAreaComponent implements OnChanges {
   
    @Input() errors: Record<string, ValidationErrors> | null = { };
    
   @Input() msg: string = '';

    @Input() errorMessages: Record<string, string> = {
        isNoted: 'Leave a message'
    }
    
    @Input() customErrorMessages: Record<string, string> = { }

    ngOnChanges(changes: SimpleChanges): void 
    {
       const { customErrorMessages } = changes
       if(customErrorMessages)
       {
          this.errorMessages = 
          {
            //  ...this.errorMessages, ...customErrorMessages.currentValue
            //  ...this.errorMessages, this.msg
          }
       }  
       console.log(this.errorMessages)
    }

}
