import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-re-stock',
  templateUrl: './re-stock.component.html',
  styleUrls: ['./re-stock.component.css']
})
export class ReStockComponent {

  title: string = 'Add To Stock'
  
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

  ReStock: FormGroup;

  constructor() 
  { 
      this.ReStock = new FormGroup(
      {
        amount: new FormControl('', [Validators.required]),
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