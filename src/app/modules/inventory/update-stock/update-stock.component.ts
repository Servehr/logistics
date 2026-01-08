import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent {

  title: string = 'Update Stock'
  
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

  Actions: any = [
      { id: '1', name:'Block' },
      { id: '2', name:'Suspend' },
      { id: '3', name:'Activate' },
      { id: '4', name:'Disengage' }
  ] 
  
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

  newStock: FormGroup;

  constructor() 
  { 
      this.newStock = new FormGroup(
      {
        merchantName: new FormControl('', [Validators.required]),
        productName: new FormControl('', [Validators.required]),
        amount: new FormControl('', [Validators.required]),
        reOrderLimit: new FormControl('', [Validators.required]),
        productImage: new FormControl('', [Validators.required]),
      }
    )
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