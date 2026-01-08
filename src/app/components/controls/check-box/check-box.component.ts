
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, NG_VALUE_ACCESSOR, NgControl, NgModel, RadioControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true 
    }
  ]
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor 
{
   @Input() id: string | undefined;
   @Input() value: any;

   @ViewChild('checkbox') inputViewChild!: ElementRef;

   @Input() checked: boolean = false;
   @Input() checkBoxValue!: string;
   @Input() disabled: boolean = false;
 
   @Input() customError: Record<string, string> = {
    }

   public onChange: Function = () => {};
   public onTouched: Function = () => {};

   control: FormControl | any;

   constructor(private injector: Injector, private _cd: ChangeDetectorRef) {}

   ngOnInit(): void {
    
     this.id = this.id ? this.id : `radio-${Math.random().toString().substr(2, 6)}`;

     const ngControl = this.injector.get(NgControl)!;
     this.control = ngControl.control!
     if(ngControl instanceof NgModel) 
     {
       this.control = ngControl.control;
     } else if (ngControl instanceof FormControlName) {
        this.control = ngControl.control;
     }
   }

   writeValue(value: any): void 
   {
     // this.checked = value === this.value;
     /*  if (this.inputViewChild && this.inputViewChild.nativeElement) {
       this.inputViewChild.nativeElement.checked = this.checked;
     } */
     this.checkBoxValue = value;

     this._cd.markForCheck();
   }

   registerOnChange(fn: Function): void {
      this.onChange = fn;
   }

   registerOnTouched(fn: Function): void {
      this.onTouched = fn;
   }

   setDisabledState(val: boolean): void {
      this.disabled = val;
   }

   onModelChange(value: any) {
      this.onTouched(value);
      this.onChange(value);
      this._cd.markForCheck();
   }

   focus() {
      this.inputViewChild.nativeElement.focus();
   }   

}
