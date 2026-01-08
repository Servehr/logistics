import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Injector, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, NG_VALUE_ACCESSOR, NgControl, NgModel } from '@angular/forms';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent implements ControlValueAccessor 
{ 
   @Input() message: string = ''
   @Input() name: string = "name" 
   @Input() id: string = "" 
   @Input() rows: number = 10
   @Input() cols: number = 35
   @Input() placeholder: string = ""
   @Output() inputedData: EventEmitter<string> = new EventEmitter()

   incomingData: string = ''

   value: string = '';

   @Input() customError: Record<string, string> = { }
    
   control: FormControl | any;
   @Input() disabled: boolean = false;
  
   private _onChange: (value: any) => void = () => {}
 
   _onTouched: () => void = () => {}
    
   constructor(private injector: Injector, private _cd: ChangeDetectorRef) {}
  
  
   ngOnInit(): void 
   {   
     const ngControl = this.injector.get(NgControl)!;
     this.control = ngControl.control
     if(ngControl instanceof NgModel) 
     {
        this.control = ngControl.control;
     } else if (ngControl instanceof FormControlName) {
        this.control = ngControl.control;
        console.log(this.control)
     }
   }

  //  textArea = (data: any) => 
  //  {
  //     this.incomingData = data.target.value
  //     this.inputedData.emit(this.incomingData)
  //  }

  //  get value(): string {
  //    return this._value;
  //  }

  //  set value(val: string) 
  //  {
  //    if (val !== this._value) 
  //    {
  //      this._value = val;
  //      this.onChange(val);
  //    }
  //  }

  writeValue(value: any): void 
  {
    this.value = value;
    this._cd.markForCheck()
  }

  registerOnChange(fn: any): void 
  {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void 
  {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void 
  {
    this.disabled = isDisabled;
  }

  onModelChange(value: any) 
  {
    this._onTouched();
    this._onChange(value);
    this._cd.markForCheck();
  }

  onChange(newValue: any): void
  {
    this.value = newValue
    this._onChange(newValue)
     this._onTouched()
  }

  onInput(event: Event): void 
  {
     this.value = (event.target as HTMLTextAreaElement).value
     this.onChange(this.value)
  }

}
