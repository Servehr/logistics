import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-rider',
  templateUrl: './update-rider.component.html',
  styleUrls: ['./update-rider.component.css']
})
export class UpdateRiderComponent {

  title: string = 'Update Rider'
  value: string = ""
  TableTitle: string = 'Riders'
  status: string = 'Successful'
  message:string = 'Post Sucessfully Sent'
  colorStatus:string = ''

  firstName:string = ''
  surName:string = ''
  dob:string = ''
  phoneNumber:string = ''
  email:string = ''
  
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

  maritalStatus:any[] = [
    { id: 'single', name:'Single' },
    { id: 'married', name:'Married' },
    { id: 'divorced', name:'Divorced' }
  ]
  countries:any[] = [
    { key: '-1', value:'- Select Country -' },
    { key: 'ng', value:'Nigeria' },
    { key: 'iran', value:'Iran' },
    { key: 'russia', value:'Russia' }
  ]
    
  stateOfOrigin:any[] = [
    { key: '-1', value:'- Select State -' },
    { key: 'lagos', value:'Lagos' },
    { key: 'kuwait', value:'Kuwait' },
    { key: 'russia', value:'Moscow' }
  ]
  location:string = ''  
   
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()
  
  Gender: any = [
      { id: '1', name:'Male' },
      { id: '2', name:'Female' },
  ]

  Location: any = [
      { id: '1', name:'Lagos' },
      { id: '2', name:'Ogun' },
      { id: '3', name:'Edo' },
      { id: '4', name:'Calabar' }
  ] 

  updateRider: FormGroup;

  constructor() 
  { 
      this.updateRider = new FormGroup(
      {
        firstname: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        maritalStatus: new FormControl('', [Validators.required]),
        states: new FormControl('', [Validators.required]),
        location: new FormControl('', [Validators.required]),
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

  alertCode = (color: string) => 
  {
    switch (color) {
      case 'error':            
        this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-red-600 rounded-lg mt-10'
        break;
      case 'success':
        this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-green-800 rounded-lg mt-10'        
        break;
      default:
        this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-purple-200 rounded-lg mt-10'
        break;
    }
    return this.colorStatus
  }

}