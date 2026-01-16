import { Directive, Inject, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroupDirective, NgControl, Validators } from '@angular/forms';
import { takeUntil, startWith, distinctUntilChanged, tap, Subject } from 'rxjs';

@Directive({
  selector: '[appControlValueAccessor]'
})
export class ControlValueAccessorDirective<T> implements ControlValueAccessor, OnInit {

    control!: FormControl
    isRequired = false

    private _isDisabled: Boolean = false
    private _isDestroyed$: any = new Subject<void>()
    private _onTouched! : () => T
    private _onChanged! : () => any


    constructor(@Inject(Injector) private injector: Injector){}

    ngOnInit()
    {
       this.setFormControl()
       this.isRequired = this.control?.hasValidator(Validators.required) ? true : false
    }

    setFormControl()
    {
       try 
       {
          const formControl = this.injector.get(NgControl)
          switch(formControl.constructor)
          {
             case FormControlName:
                this.control = this.injector.get(FormGroupDirective).getControl(formControl as FormControlName)
                // console.log(this.control)
                break;
             default:
                this.control = (formControl as FormControlDirective).form as FormControl
                // console.log(this.control)
                break;
          } 
       } catch (error) {
          this.control = new FormControl()
          // console.log(this.control)
       }
    }

    writeValue(value: T): void {
      this.control ? this.control?.setValue(value) : (this.control = new FormControl(value) )
      // console.log(this.control)
    }

    registerOnChange(fn: (val: T | null) => T): void {
      this.control?.valueChanges
        .pipe(
             takeUntil(this._isDestroyed$),
             startWith(this.control.value),
             distinctUntilChanged(),
             tap((val) => fn(val))
          ).subscribe(() => {
            // this.control?.markAsUntouched()
          })
    }

    registerOnTouched(fn: () => T): void {
      // console.log(this.control)
      this._onTouched = fn
    }
    
    setDisabledState?(isDisabled: boolean): void {
       this._isDisabled = isDisabled
    }


}
