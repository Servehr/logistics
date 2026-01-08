import { Component, Input } from '@angular/core';
import { ModalService } from '../../../app/service/shared/modal/modal.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

    title: string = 'RachamHub - Merchants'
    TableTitle: string = 'Expenses'
    status: string = 'Successful'
    message:string = 'Post Sucessfully Sent'
    colorStatus:string = ''

    firstName:string = ''
    surName:string = ''
    dob:string = ''
    phoneNumber:string = ''
    email:string = ''
    maritalStatus:any[] = [
      { key: '-1', value:'- Select Marital Status -' },
      { key: '-1', value:'Single' },
      { key: '-1', value:'Married' },
      { key: '-1', value:'Divorced' }
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

    @Input() labelName: string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Title', Column: 'title', show: true }, 
            { Header: 'Reasons', Column: 'reason', show: true  }, 
            { Header: 'Amount', Column: 'amount', show: true  }, 
            { Header: 'Execution State', Column: 'status', show: true  }, 
            { Header: 'Actions', Column: '', show: false  }
        ],
        "product": [        
          { Header: 'Name', Column: 'name', show: true }, 
          { Header: 'Price', Column: 'price', show: true  }, 
          { Header: 'Quantity', Column: 'quantity', show: true  },
          { Header: 'Discount', Column: 'discount', show: true  },
          { Header: 'Actions', Column: '', show: false  }
        ]
      }
    ]
    
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { title: 'AC Repairs', reason: 'Payment for technician labour', amount: '4,000',  status: 'Executed', actions: ''},
          { title: 'Stationaries', reason: 'For staff use', amount: '12,000', status: 'Executed',  actions: ''},
          { title: 'Petrol', reason: 'To provide electricty in the office for the month', amount: '45,000', status: 'Pending',  actions: ''},
          { title: 'CWay', reason: 'For the office the week', amount: '5,000', status: 'Executed',  actions: ''}
        ]
      } 
    ]

    @Input() Action: boolean = false
    @Input() ViewAction: boolean = false


    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'

    @Input() name = 'Select an option'
    @Input() options = [
      { key: '-1', value:'Select an option' },
      { key: 'title', value:'Title' },
      { key: 'reason', value:'Reason' },
      { key: 'amount', value:'Amount' },
      { key: 'status', value:'Status' }
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

    constructor(public modalService: ModalService){}


    changeStatus = (event: any) => 
    {
      this.switchStatus = event.switchStatus
      this.switchState = event.switchState
      this.switchingState = event.switchingState
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



