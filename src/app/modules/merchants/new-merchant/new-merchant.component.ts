import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CheckNote, IsSelectionMake } from 'src/app/auth/login/login.component';
import AppState from 'src/app/state/app.state';

export const CompanyNameRequiredAndLength = (control: AbstractControl): ValidationErrors | null => {
    return control.value.length ===  0 ?   { CompanyNameRequired : "Enter company name++" } : null
}

export const CompanyLocationRequiredAndLength = (control: AbstractControl): ValidationErrors | null => {
    return control.value.length ===  "-1"?   { selectionRequired : "Enter your company  address" } : null
}

export const AboutCompanyRequiredAndLength = (control: AbstractControl): ValidationErrors | null => {
    return control.value.length ===  0 ?   { isNoted : "Enter some text about your company" } : null
}

export const CompanyAddressRequiredAndLength = (control: AbstractControl): ValidationErrors | null => {
    return control.value.length ===  0 ?   { isNoted : "Enter your company  address" } : null
}

// export const CheckNote = (control: AbstractControl): ValidationErrors | null => 
// {
//     return control.value?.length === 0 || control.value === null ? { isNoted : 'isNoted' } :  null
// }

@Component({
  selector: 'app-new-merchant',
  templateUrl: './new-merchant.component.html',
  styleUrls: ['./new-merchant.component.css']
})
export class NewMerchantComponent {

  title: string = 'New Merchant'
  rows: number = 2
  message: string = ''
  
  errorMessages = 
  { 
    CompanyNameRequired: 'Enter Company Name', 
    selectionRequired: 'Make selection',
    CompanyLocationRequired: 'Select State', 
    isNoted: 'Enter Detail'
    // isNoted: { msg: 'Enter Detail' }
  }

  countries:any[] = [
    { id: 'ng', name:'Nigeria' },
    { id: 'iran', name:'Iran' },
    { id: 'russia', name:'Russia' }
  ]  
    
  stateOfOrigin:any[] = [
    { id: 'lagos', name:'Lagos' },
    { id: 'kuwait', name:'Kuwait' },
    { id: 'russia', name:'Moscow' }
  ] 
  
  categories:any[] = [
    { id: '-1', name:'- Select Category -' },
    { id: 'ho', name:'Head Office' },
    { id: 'lekki', name:'Lekki' }
  ]  
     
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter() 

  newMerchant: FormGroup;
  
  constructor(private store: Store<AppState>, private router: Router)
  { console.log("Greaxxx")
     this.newMerchant = new FormGroup(
     {
       company: new FormControl('', [CompanyNameRequiredAndLength]),
       states: new FormControl('', [IsSelectionMake]),
       about: new FormControl('', [CheckNote]),
       address: new FormControl('', [CheckNote]),
     })    
  }

  sendData()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

  CloseCurrentModal()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }


  NewMerchant = async () => 
  {console.log(this.newMerchant.value)
    //  this.store.dispatch(SetLoadingStatus({ loading: true }))
     if(this.newMerchant.valid)
     {
        this.router.navigate(['/overview'])
     } else {
        this.newMerchant.markAllAsTouched();
        // this.store.dispatch(SetLoadingStatus({ loading: false }))
        this.message = "Attend to all fields"
        // this.store.dispatch(SetErrorMessage({ msg: this.message, statusCode: 400, operation: "authenticate-user"  }))
     }     
  }
  


}
