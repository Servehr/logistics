import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-shelve-location',
  templateUrl: './order-shelve-location.component.html',
  styleUrls: ['./order-shelve-location.component.css']
})
export class OrderShelveLocationComponent {
  
    title: string = 'RachamHub - Merchants'
    TableTitle: string = 'Shelves'
    status: string = 'Successful'
    message:string = 'Post Sucessfully Sent'
    colorStatus:string = ''
  
    firstName:string = ''
    surName:string = ''
    dob:string = ''
    phoneNumber:string = ''
    email:string = ''
        
    @Input() ModalState: string = '<><><>'
    @Output() FromPackage: EventEmitter<string> = new EventEmitter()
      
    maritalStatus:any[] = [
      { key: '-1', value:'- Select Marital Status -' },
      { key: 'single', value:'Single' },
      { key: 'married', value:'Married' },
      { key: 'divorced', value:'Divorced' }
    
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
  
    @Input() labelName: string = ''
  
    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'
  
    @Input() Header: any[] = [
      {
        "order": [        
          { Header: 'States', Column: 'states', show: true },
          { Header: 'Available Orders', Column: 'availableOrders', show: true  },
          { Header: 'Status', Column: 'status', show: true  }, 
          { Header: 'Actions', Column: '', show: false  }
        ],
        "product": [        
          { Header: 'Location', Column: 'name', show: true }, 
          { Header: 'Products', Column: 'product', show: true  }, 
          { Header: 'Quantity', Column: 'quantity', show: true  },
          { Header: 'Discount', Column: 'discounts', show: false  },
          { Header: 'Actions', Column: '', show: false  }
        ]
      }
    ]
      
    @Input() RowAndColumn: any[] = [
      {
        orders: [                
          { states: 'Ogun', availableOrders: 35, status: '', actions: ''},
          { states: 'Abuja', availableOrders: 70, status: '', actions: ''},
          { states: 'Lagos',  availableOrders: 120, status: '', actions: ''}
        ],
        products: [                
          { name: 'Mary Land', product: 'Laptop', quantity: 4, discount: '080973764764' },
          { name: 'Computer Village', product: 'Gucci Shoe', quantity: 2, discount: '07075747333' },
          { name: 'Along', product: 'Carton of Indome', quantity: 8, discount: '08023384222' },
          { name: 'Allen Avenue', product: 'Valentio Polo', quantity: 7, discount: '07075747333' },
          { name: 'Leventis', product: 'Set of Pot', quantity: 8, discount: '08023384222' },
          { name: 'Allen Avenue', product: 'School Bag', quantity: 5, discount: '07075747333' },
          { name: 'Allen Avenue', product: '4Litres of Sonal Oil', quantity: 2, discount: '08023384222' },
          { name: 'Computer Village', product: 'Recharageable Fan', quantity: 4, discount: '08023384222' },
          { name: 'Computer Village', product: 'AT Extenstion', quantity: 3, discount: '07075747333' },
          { name: 'Computer Village', product: 'Fan', quantity: 1, discount: '08023384222' },
          { name: 'Leventis', product: 'Laptop', quantity: 3, discount: '07075747333' },
          { name: 'Leventis', product: 'School Bag', quantity: 2, discount: '08023384222' },
          { name: 'Along', product: 'Printer', quantity: 4, discount: '07075747333' },
          { name: 'Computer Village', product: 'Samsung T20', quantity: 4, discount: '08023384222' },
          { name: 'Along', product: 'RechargeableBulb', quantity: 5, discount: '07075747333' },
          { name: 'Mary Land', product: 'Fan', quantity: 2, discount: '08023384222' },
          { name: 'Mary Land', product: 'Head Set', quantity: 5, discount: '09087439823' }
        ]
      }
    ]
  
    @Input() Action: boolean = false
    @Input() Availability: boolean = true
    @Input() ViewAction: boolean = false
  
    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'
  
    @Input() name = 'Select an option'
    @Input() options = [
      { key: '-1', value:'Select an option' },
      { key: 'merchants', value:'Merchant' },
      { key: 'customers', value:'Customers' },
      { key: 'orders', value:'Orders' }
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
  
    @Input() deliveryStatus = [
      { key: '-1', value:'Delivered Or Not' },
      { key: 'no', value:'No' },
      { key: 'yes', value:'Yes' }
    ]
  
    @Input() riders = [
      { key: '-1', value:'Find Rider' },
      { key: '1', value:'Emeka' },
      { key: '2', value:'Adamu' }
    ]
  
    @Input() buttonText:string = 'Search'
    @Input() buttonColor:string = 'bg-CompanyBlue'
    @Input() reason:string = ''
    
    changeStatus = (event: any) => 
    {
      this.switchStatus = event.switchStatus
      this.switchState = event.switchState
      this.switchingState = event.switchingState
    }

    CloseCurrentModal()
    {
      this.ModalState = ''
      this.FromPackage.emit('')
    }

    CancelPackage(event: any)
    {
       this.ModalState = event
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

    sendData()
    {
      this.ModalState = ''
      this.FromPackage.emit('')
    }
  
  }
