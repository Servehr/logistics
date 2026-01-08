import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl, Validators } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/control-value-accessor.directive';


type InputType = 'text' | 'password' |  'email'  |  'number'


@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [
     {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => InputFieldComponent),
       multi: true 
     }
  ]
})
export class InputFieldComponent<T> extends ControlValueAccessorDirective<T> {

    @Input()
    id: string = ""

    @Input()
    name: string = ""

    @Input()
    type: string = "text"

    @Input()
    placeholder: string = ""

    @Input()
    value: string = ""

    @Input()
    disabled: boolean = false

    selectedOption: string = ''
    
    @Output()
    changedInput: EventEmitter<{ value: string; type: string }> = new EventEmitter<{ value: string; type: string }>()
    
    @Input() customErrorMessages: Record<string, string> = { }
    
    InputChange(event: any)
    {
      let userInput = event?.target?.value
      this.changedInput.emit({ value: userInput, type: this.name })
    }

}
