import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/state/model/user.model';

@Component({
  selector: 'view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent {
  
    title: string = 'Staf Information'

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

  @Input() disabled:boolean = false
   
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

  CloseCurrentModal()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

}
