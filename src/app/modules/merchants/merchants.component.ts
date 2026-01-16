  import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent {

    title: string = 'RachamHub - Merchants'
    TableTitle: string = 'Merchants'
    status: string = 'Successful'
    message:string = 'Post Sucessfully Sent'
    colorStatus:string = ''   
    ActionName: string = 'merchants'
    @Input() ModalState: string = ''
    @Output() FromPackage: EventEmitter<string> = new EventEmitter()

    company:string = ''
    countries:any[] = [
      { key: '-1', value:'- Select Country -' },
      { key: 'ng', value:'Nigeria' },
      { key: 'iran', value:'Iran' },
      { key: 'russia', value:'Russia' }
    ]
    
    states:any[] = [
      { key: '-1', value:'- Select State -' },
      { key: 'lagos', value:'Lagos' },
      { key: 'kuwait', value:'Kuwait' },
      { key: 'russia', value:'Moscow' }
    ]
    categories:any[] = [
      { key: '-1', value:'- Select Category -' },
      { key: 'ho', value:'Head Office' },
      { key: 'lekki', value:'Lekki' }
    ]

    location:string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Name', Column: 'name', show: true }, 
            { Header: 'Location', Column: 'location', show: true  }, 
            { Header: 'Total Order', Column: 'total', show: true  }, 
            { Header: 'Order Process', Column: 'order', show: true  }, 
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { name: 'Elin Electronics', location: 'Victoria Island', total: 1200, order: '1120 | 80 ', actions: ''},
          { name: 'Unilever', location: 'MaryLand', total: 5420, order: '5415 | 5 ', actions: ''},
          { name: 'Dangote', location: 'Ikeja', total: 420, order: '400 | 20 ', actions: ''},
          { name: 'Ebano Supermarket', location: 'MaryLand', total: 854, order: '604 | 250 ', actions: ''}
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

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
    

}
