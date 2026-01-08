import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  title: string = 'Delete Account'
  value: string = ''
  
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
   
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()


  newAccount: FormGroup; 
      
  constructor() 
  { 
     this.newAccount = new FormGroup(
     {
       bankName: new FormControl('', [Validators.required]),
       accountName: new FormControl('', [Validators.required]),
       accountNumber: new FormControl('', [Validators.required]),
       accountType: new FormControl('', [Validators.required])
     }
    )
  }  
  
  CloseCurrentModal()
  {
    this.ModalState = ''
    this.FromPackage.emit("")
  }

}
