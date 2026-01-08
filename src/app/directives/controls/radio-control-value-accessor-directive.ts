import { ChangeDetectorRef, Directive, Inject, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, Validators, NgControl, FormControlName, FormGroupDirective, FormControlDirective } from '@angular/forms';
import { Subject, takeUntil, startWith, distinctUntilChanged, tap } from 'rxjs';

@Directive({
  selector: '[appRadioControlValueAccessorDirective]'
})
export class RadioControlValueAccessorDirective<T> implements ControlValueAccessor, OnInit {

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
               break;
             default:
               this.control = (formControl as FormControlDirective).form as FormControl
               break;
          } 
       } catch (error) {
          this.control = new FormControl()
       }
    }

    writeValue(value: T): void {
      if(value != null)
      {
         this.control ? this.control?.setValue(value) : (this.control = new FormControl(value) )
      }
    }

    registerOnChange(fn: (val: T | null) => T): void {
      this.control?.valueChanges
        .pipe(
             takeUntil(this._isDestroyed$),
             startWith(this.control.value),
             distinctUntilChanged(),
             tap((val) => fn(val))
          ).subscribe(() => {
            this.control?.markAsUntouched()
          })
    }

    registerOnTouched(fn: () => T): void {
      this._onTouched = fn
    }
    
    setDisabledState?(isDisabled: boolean): void {
       this._isDisabled = isDisabled
    }


}
