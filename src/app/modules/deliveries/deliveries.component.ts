import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent  {

    title: string = 'Deliveries'
    colorStatus:string = ''
    reason:string = ''
    ModalState: string = ''

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

    @Input() ActionName: string = 'transactions'

    @Input() labelName: string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Merchants', Column: 'merchants', show: true }, 
            { Header: 'Customer', Column: 'customers', show: true }, 
            { Header: 'Rider', Column: 'riders', show: true }, 
            { Header: 'Merchant Status', Column: 'merchantStatus', show: true  }, 
            { Header: 'RachamHub Status', Column: 'rachamHub', show: true  }, 
            { Header: 'Rider Status', Column: 'riderStatus', show: true  }, 
            { Header: 'Actions', Column: '', show: false  }
        ],
        "transaction": [        
          { Header: 'Merchants', Column: 'merchants', show: true }, 
          { Header: 'Customer', Column: 'customers', show: true }, 
          { Header: 'Rider', Column: 'riders', show: true },
          { Header: 'Location', Column: 'location', show: true }, 
          { Header: 'Total Amt', Column: 'totalAmount', show: true  }, 
          { Header: 'Product', Column: 'product', show: true  }, 
          { Header: 'Delivery Fee', Column: 'delivery', show: true  }, 
          { Header: 'Bank', Column: 'bank', show: true  }, 
          { Header: 'Actions', Column: '', show: false  }
      ]
      }
    ]
    
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { merchants: 'Ayo Bamidele', customers: 'AC Repairs', riders: 'Payment for technician labour', rachamHub: 'Yes',  merchantStatus: 'Yes', riderStatus: 'Yes', actions: ''},
          { merchants: 'Benjamin Ayodele', customers: 'Stationaries', riders: 'For staff use', rachamHub: 'Yes', merchantStatus: 'Yes', riderStatus: 'Yes', actions: ''},
          { merchants: 'Musa Abdullahi', customers: 'Petrol', riders: 'To provide electricty in the office for the month', rachamHub: 'No', merchantStatus: 'No', riderStatus: 'No', actions: ''},
          { merchants: 'Ugochukwu Obinna', customers: 'CWay', riders: 'For the office the week', rachamHub: 'Yes', merchantStatus: 'No', riderStatus: 'Yes',  actions: ''}
        ],
        transactions: [                
          { merchants: 'Spar', customers: 'Badmus Ibidun', riders: 'Kanayo Effiong', location: 'Ikeja', totalAmount: '40,000',  product: '36,000', delivery: '4,000', bank: 'First Bank', actions: ''},
          { merchants: 'Ebano Supermarket', customers: 'Emeka Stanley', riders: 'John Ebuka', location: 'Ikorodu', totalAmount: '120', product: '110,000', delivery: '10,000', bank: 'Unity Bank', actions: ''},
          { merchants: 'Fara Mill', customers: 'Jude Kenneth', riders: 'Samuel Elvis', location: 'Island', totalAmount: '15,000', product: '13,000', delivery: '2,000', bank: 'GTCO Bank', actions: ''},
          { merchants: 'Blisful Mart', customers: 'Fathia Uthman', riders: 'Timothy Okon', location: 'Festac', totalAmount: '65,000', product: '62,000', delivery: '3,000', bank: 'Zenith',  actions: ''}
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
      { key: 'first', value:'first' },
      { key: 'second', value:'second' },
      { key: 'third', value:'third' },
      { key: 'fourth', value:'fourth' },
      { key: 'fifth', value:'fifth' },
      { key: 'six', value:'six' },
      { key: 'seven', value:'seven' },
      { key: 'eight', value:'eight' },
      { key: 'nine', value:'nine' }
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

