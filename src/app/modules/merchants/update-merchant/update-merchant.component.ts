import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-update-merchant',
  templateUrl: './update-merchant.component.html',
  styleUrls: ['./update-merchant.component.css']
})
export class UpdateMerchantComponent {

  title: string = 'Update Merchant'
  rows: number = 3
  
  errorMessages = 
  { 
    required: 'Enter ...', 
    firstname: 'Enter firstname', 
    surname: 'Enter surname', 
    dob: 'Select dob',
    phone: 'Enter phone number' , 
    email: 'Provide email',
    gender: 'Male or Female',
    maritalStatus: 'Are you single, married or divorced',
    states: 'Select a state',
    location: 'Enter Location',
  }

  countries:any[] = [
    { id: '-1', name:'- Select Country -' },
    { id: 'ng', name:'Nigeria' },
    { id: 'iran', name:'Iran' },
    { id: 'russia', name:'Russia' }
  ]  
    
  stateOfOrigin:any[] = [
    { id: '-1', name:'- Select State -' },
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
  
  constructor(private store: Store<AppState>)
  { 
     this.newMerchant = new FormGroup(
     {
       company: new FormControl('', [Validators.required]),
       country: new FormControl('', [Validators.required]),
       states: new FormControl('', [Validators.required]),
       category: new FormControl('', [Validators.required]),
       note: new FormControl('', [Validators.required]),
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

}
