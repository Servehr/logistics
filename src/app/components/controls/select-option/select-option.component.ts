import { ChangeDetectorRef, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, NG_VALUE_ACCESSOR, NgControl, NgModel } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectOptionComponent),
      multi: true 
    }
  ]
})
export class SelectOptionComponent implements OnInit, ControlValueAccessor 
{

  @Input()
  title: string = ''

  @Input()
  options: { id: string, name: string }[] = []

  @Input()
  value: string = ''
  
  @Input() customError: Record<string, string> = { }
  
  control: FormControl | any;
  @Input() disabled: boolean = false;

  private _onChange: (value: any) => void = () => {}

  private _onTouched: () => void = () => {}
  
  constructor(private injector: Injector, private _cd: ChangeDetectorRef) {}


  ngOnInit(): void 
  {   
    const ngControl = this.injector.get(NgControl)!;
    this.control = ngControl.control!
    console.log(this.control)
    if(ngControl instanceof NgModel) 
    {
       this.control = ngControl.control;
       console.log(this.control)
    } else if (ngControl instanceof FormControlName) {
       this.control = ngControl.control;
       console.log(this.control)
    }
  }

  writeValue(obj: any): void 
  {
    this.value = obj
    this._cd.markForCheck()
  }

  registerOnChange(fn: any): void 
  {
    this._onChange = fn
  }

  registerOnTouched(fn: any): void 
  {
    this._onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void 
  {
    this.disabled = isDisabled
  }  

   onModelChange(value: any) {
      this._onTouched();
      this._onChange(value);
      this._cd.markForCheck();
   }

  onChange(newValue: Event): void
  {
    const selectedValue = (newValue.target as HTMLSelectElement).value;
    this.value = selectedValue
    this._onChange(selectedValue)
    this._onTouched()
  }

}
