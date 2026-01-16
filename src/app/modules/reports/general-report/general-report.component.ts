import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.css']
})
export class GeneralReportComponent 
{
    title: string = 'RachamHub - Report'
    status: string = 'Successful'
    message:string = 'Post Sucessfully Sent'
    colorStatus:string = ''

    firstName:string = ''
    surName:string = ''
    dob:string = ''
    phoneNumber:string = ''
    email:string = ''

    page: number = 0

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
    
    ModalState: string = ''

    @Input() labelName: string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Merchant', Column: 'merchant', show: true }, 
            { Header: 'Receiver', Column: 'receiver', show: true  }, 
            { Header: 'Rider', Column: 'rider', show: true  }, 
            { Header: 'Destination', Column: 'destination', show: true  },
            { Header: 'Status', Column: 'status', show: false  }, 
            { Header: 'Actions', Column: '', show: false  }
        ],
        "product": [        
          { Header: 'Name', Column: 'name', show: true }, 
          { Header: 'Price', Column: 'price', show: true  }, 
          { Header: 'Quantity', Column: 'quantity', show: true  },
          { Header: 'Discount', Column: 'discount', show: true  },
          { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { merchant: 'Ebere', receiver: 'Uzochukwu', rider: 80973764764, destination: 'eberechukwu90087@gmail.com' },
          { merchant: 'Marcus', receiver: 'Nnamadi', rider: 7075747333, destination: 'nnamarcus12@yahoo.com' },
          { merchant: 'Chris', receiver: 'Donaltus', rider: 8023384222, destination: 'chris001@gmail.com' },
          { merchant: 'Busayo', receiver: 'Oluwapelumi', rider: 9087439823, destination: 'oluwabusayopelumi@ymail.com' } 
        ],
        products: [                
          { name: 'Dangote PLC', price: 4, quantity: 'Uzochukwu Emeka', discount: '080973764764', actions: ''},
          { name: 'Ebano Supermarket', price: 2, quantity: 'Nnamadi Azikwe', discount: '07075747333', actions: ''},
          { name: 'Unilever PLC', price: 8, quantity: 'Donaltus Benjamin', discount: '08023384222', actions: ''},
          { name: 'Ebano Supermarket', price: 2, quantity: 'Nnamadi Azikwe', discount: '07075747333', actions: ''},
          { name: 'Unilever PLC', price: 8, quantity: 'Donaltus Benjamin', discount: '08023384222', actions: ''},
          { name: 'Ebano Supermarket', price: 2, quantity: 'Nnamadi Azikwe', discount: '07075747333', actions: ''},
          { name: 'Unilever PLC', price: 8, quantity: 'Donaltus Benjamin', discount: '08023384222', actions: ''},
          { name: 'Emmanuchukwu Uzochukwu & Son', price: 6, quantity: 'Oluwapelumi Oluwatosin', discount: '09087439823', actions: ''}
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
      { key: 'merchants', value:'Merchant' },
      { key: 'receiver', value:'Receiver' },
      { key: 'rider', value:'Rider' },
      { key: 'location', value:'Location' }
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


    ViewOrderReport(event: any)
    {
       this.ModalState = event
    }

    changeStatus = (event: any) => 
    {
      this.switchStatus = event.switchStatus
      this.switchState = event.switchState
      this.switchingState = event.switchingState
    }

   CloseCurrentModal(event: any)
   {
     this.ModalState = ''
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

    setPage(page: any)
    {
       this.page = page
    }

}
