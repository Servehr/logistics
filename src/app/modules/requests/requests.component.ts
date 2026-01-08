import { Component, Input } from '@angular/core';
import { ModalService } from '../../../app/service/shared/modal/modal.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {

    title: string = 'RachamHub - Merchants'
    TableTitle: string = 'Requests'
    status: string = 'Successful'
    message:string = 'Post Sucessfully Sent'
    colorStatus:string = ''
    reason:string = ''

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
            { Header: 'Staffs', Column: 'staffs', show: true }, 
            { Header: 'Title', Column: 'title', show: true }, 
            { Header: 'Reasons', Column: 'reason', show: true  }, 
            { Header: 'Amount', Column: 'amount', show: true  }, 
            { Header: 'Priority', Column: 'priority', show: true  }, 
            { Header: 'Approval', Column: 'approval', show: true  },
            { Header: 'Date', Column: 'date', show: true  }, 
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
          { staffs: 'Ayo Bamidele', title: 'AC Repairs', reason: 'Payment for technician labour', amount: '4,000',  priority: 'High', approval: 'Approved', date: '23-12-2023', actions: ''},
          { staffs: 'Benjamin Ayodele', title: 'Stationaries', reason: 'For staff use', amount: '12,000', priority: 'Medium', approval: 'Approved', date: '20-12-2024',  actions: ''},
          { staffs: 'Musa Abdullahi', title: 'Petrol', reason: 'To provide electricty in the office for the month', amount: '45,000', priority: 'High', approval: 'Declined', date: '03-12-2024',  actions: ''},
          { staffs: 'Ugochukwu Obinna', title: 'CWay', reason: 'For the office the week', amount: '5,000', priority: 'Low', approval: 'Approved', date: '24-02-2024',  actions: ''}
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
      { key: 'staffs', value:'Staffs' },
      { key: 'title', value:'Title' },
      { key: 'reason', value:'Reason' },
      { key: 'amount', value:'Amount' }
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
    
    states:any[] = [
      { key: '-1', value:'- Select State -' },
      { key: 'lagos', value:'Lagos' },
      { key: 'ogun', value:'Ogun' },
      { key: 'kano', value:'Kano' },
      { key: 'abia', value:'Abia' }
    ]

    areas:any[] = [
      { key: '-1', value:'- Select State -' },
      { key: 'ketu', value:'Ketu' },
      { key: 'fetstac', value:'Festac' },
      { key: 'ikeja', value:'Ikeja' }
    ]
    
    destinations:any[] = [
      { key: '-1', value:'- Select State -' },
      { key: 'ogba', value:'Ogba' },
      { key: 'maryland', value:'Mary Land' },
      { key: 'allen-avenue', value:'Allen Avenue' },
      { key: 'compupter-village', value:'Computer' }
    ]
    
    priority:any[] = [
      { key: '-1', value:'- Select Priority -' },
      { key: 'low', value:'Low' },
      { key: 'medium', value:'Medium' },
      { key: 'high', value:'High' },
    ]

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



