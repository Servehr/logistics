import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SetLoadingStatus } from 'src/app/state/actions/spinner.action';
import { AddingUser } from 'src/app/state/actions/user.actions';
import AppState from 'src/app/state/app.state';
import { User } from 'src/app/state/model/user.model';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {

    title: string = 'Add New Staff'

    User: User = 
    {
      id: 0,
      firstname: '',
      surname: '',
      phone_number: '',
      alternate_phone_number: '',
      email: '',
      department_id: {
        id: 0,
        name: ""
      },
      user_type: -1,
      dob: undefined,
      gender: '',
      marital_status: '',
      country_id: {
        id: 0,
        name: ""
      },
      capital_id: {
        id: 0,
        name: ""
      },
      address: '',
      employee_id: '',
      user_type_id: -1,
      status: '',
      onboardedBy: '',
      image: ''
    }

    firstName: string = ""
    surName: string = ""
    phoneNumber: string = ""
    email: string = ""
    dob: Date = new Date("yyyy-mm-dd")
    gender: string = ""
    address: string = ""
    marital_status: string = ""
    user_type_id: number = -1
    department_id: number = -1
    country_id: number = -1
    capital_id: number = -1
    value: string = ''
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
  
    Gender: any = [
        { id: '1', name:'Male' },
        { id: '2', name:'Female' },
    ]

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

    responseStatus: string = ''

    @Input() ModalState: string = ''
    @Output() FromPackage: EventEmitter<string> = new EventEmitter()

    newStaff: FormGroup;
    
    constructor(private store: Store<AppState>)
    { 
        this.newStaff = new FormGroup(
        {
          firstname: new FormControl('', [Validators.required]),
          surname: new FormControl('', [Validators.required]),
          dob: new FormControl('', [Validators.required]),
          phone: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required]),
          gender: new FormControl('', [Validators.required]),
          maritalStatus: new FormControl('', [Validators.required]),
          country: new FormControl('', [Validators.required]),
          states: new FormControl('', [Validators.required]),
          location: new FormControl('', [Validators.required]),
          note: new FormControl('', [Validators.required]),
        }
      )    
    }

    create = () => 
    {      
        this.responseStatus = '0'
        const staff: User = 
        {  
            firstname: this.firstName,
            surname: this.surName,
            phone_number: this.phoneNumber,
            email: this.email,
            department_id: this.department_id,
            user_type_id: this.user_type_id,
            dob: this.dob,
            gender: this.gender,
            marital_status: this.marital_status,
            country_id: this.country_id,
            capital_id: this.capital_id,
            address: this.address
        }
        this.store.dispatch(SetLoadingStatus({ loading: true }))
        this.store.dispatch(AddingUser({ user: staff }))
    }

    cancel = () => 
    {
        this.firstName = ""
        this.surName = ""
        this.phoneNumber = ""
        this.email = ""
        this.dob = new Date()
        this.gender = ""
        this.address = ""
        this.marital_status = ""
        this.user_type_id = -1
        this.department_id = -1
        this.country_id = -1
        this.capital_id = -1
        this.address = ""

        // this.modalService.addDialog = false
    }

    cancelInput = () => 
    {   
       this.User =
       {    
         id: 0,
         firstname: '',
         surname: '',
         phone_number: '',
         alternate_phone_number: '',
         email: '',
         department_id: {
           id: 0,
           name: ""
         },
         user_type: -1,
         // dob: new Date('yyyy-mm-dd'),
         gender: '',
         marital_status: '',
         country_id: {
          id: 0,
          name: ""
         },
         capital_id: {
          id: 0,
          name: ""
         },
         address: '',
         employee_id: '',
         user_type_id: -1,
         status: '',
         onboardedBy: '',
         image: ''
        }
        // this.modalService.addDialog = false
    }

    CloseCurrentModal()
    {
       this.ModalState = ''
       this.FromPackage.emit('')
    }

}
