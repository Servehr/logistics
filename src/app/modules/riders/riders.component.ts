import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent {

    title: string = 'Riders'

    id: string = ''
    // name: string = ''
    type: string = ''
    placeholder: string = ''
    ModalState: string = ''
    ActionName: string = 'riders'

    @Input() labelName: string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Header: any[] = [
      {
        "rider": [        
            { Header: 'Firstname', Column: 'firstname', show: true }, 
            { Header: 'Surname', Column: 'surname', show: true  }, 
            { Header: 'Phone Number', Column: 'phone', show: true  }, 
            { Header: 'Email', Column: 'email', show: true  }, 
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    @Input() RowAndColumn: any[] = [
      {
        riders: [                
          { firstname: 'Ebere', surname: 'Uzochukwu', phone: 80973764764, email: 'eberechukwu90087@gmail.com', actions: ''},
          { firstname: 'Marcus', surname: 'Nnamadi', phone: 7075747333, email: 'nnamarcus12@yahoo.com', actions: ''},
          { firstname: 'Chris', surname: 'Donaltus', phone: 8023384222, email: 'chris001@gmail.com', actions: ''},
          { firstname: 'Busayo', surname: 'Oluwapelumi', phone: 9087439823, email: 'oluwabusayopelumi@ymail.com', actions: ''}
        ]
      } 
    ]
    @Input() Action: boolean = true
    @Input() ViewAction: boolean = false


    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'

    @Input() name = 'Select an option'
    @Input() options = [
        { key: '-1', value:'Select an option' },
        { key: 'firstname', value:'First Name' },
        { key: 'surname', value:'Surname' }
    ]

    @Input() pages = 'Select No of Pages'
    @Input() pageNumbers = [
      { key: '20', value:'20' },
      { key: '30', value:'30' },
      { key: '50', value:'50' },
      { key: '75', value:'75' },
      { key: '100', value:'100' },
      { key: '150', value:'150' },
      { key: '200', value:'200' },
      { key: '500', value:'500' }
    ]

    @Input() buttonText:string = 'Search'
    @Input() buttonColor:string = 'bg-CompanyBlue'

    changeStatus = (event: any) => 
    {
      this.switchStatus = event.switchStatus
      this.switchState = event.switchState
      this.switchingState = event.switchingState
    }    

    SeeRiderDetail(event: any)
    {
       this.ModalState = event
    }

    Close(event: any)
    {
      this.ModalState = event
    }

}
