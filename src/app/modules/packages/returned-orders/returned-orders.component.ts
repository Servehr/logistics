import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-returned-orders',
  templateUrl: './returned-orders.component.html',
  styleUrls: ['./returned-orders.component.css']
})
export class ReturnedOrdersComponent {

    title: string = 'RachamHub - Returned Orders'
    ModalState: string = ''
    @Input() ActionName: string = 'returned-orders'

    firstName:string = ''
    surName:string = ''
    dob:string = ''
    phoneNumber:string = ''
    email:string = ''
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

    @Input() Header: any[] = [
      {
        "order": [        
          { Header: 'Merchant', Column: 'merchant', show: true }, 
          { Header: 'Products', Column: 'products', show: true  }, 
          { Header: 'Tag IDs', Column: 'tag', show: true  }, 
          { Header: 'Customers', Column: 'customers', show: true  },
          { Header: 'Phone', Column: 'phone', show: true  }, 
          { Header: 'Orders', Column: 'orders', show: true  }, 
          { Header: 'Deliveries', Column: 'delivery', show: true  },
          { Header: 'Status', Column: 'status', show: false  }, 
          { Header: 'Actions', Column: '', show: true  }
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
        orders: [                
            { merchant: 'Dangote PLC', tag: 'ERIDUEJR', products: 'Laptop', customers: 'Uzochukwu Emeka', phone: '080973764764', orders: '5,000', delivery: '4,760', status: '', actions: ''},
            { merchant: 'Ebano Supermarket', tag: 'FKFIEMCD',  products: 'School Bag', customers: 'Nnamadi Azikwe', phone: '07075747333', orders: '3,500', delivery: '2,567', status: '', actions: ''},
            { merchant: 'Unilever PLC', tag: 'MCNVBRLA',  products: 'Patek Wrist Watch', customers: 'Donaltus Benjamin', phone: '08023384222', orders: '716', delivery: '5205', status: '', actions: ''},
            { merchant: 'Emmanuchukwu Uzochukwu & Son', tag: 'QP987CXS',  products: 'Nike Sandal', customers: 'Oluwapelumi Oluwatosin', phone: '09087439823', orders: '120', delivery: '120', status: '', actions: ''}
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

    orderStatus:string = ''
    @Input() deliveryStatus = [
      { key: '-1', value:'Delivered Or Not' },
      { key: 'no', value:'No' },
      { key: 'yes', value:'Yes' },
      { key: 'yesBut', value:'Yes With But' }
    ]

    @Input() riders = [
      { key: '-1', value:'Find Rider' },
      { key: '1', value:'Emeka' },
      { key: '2', value:'Adamu' }
    ]

    @Input() buttonText:string = 'Search'
    @Input() buttonColor:string = 'bg-CompanyBlue'
    @Input() reason:string = ''

    form: FormGroup<any> = this.fb.group({
       orderControls: this.fb.array([])
    })

    constructor(private fb: FormBuilder){}

    get orderControls()
    {
      return this.form.get('orderControls') as FormArray
    }

    addOrderControl = () => {
       this.orderControls.push(
         this.fb.group({
            productName: [''],
            productQuantity: ['']
         })
       )
    }

    @ViewChild('productQuantity') productQuantity: ElementRef | undefined

    removeOrderControl = (currentControl: number) => {
       this.orderControls.removeAt(currentControl)
    }

    selectedControl: number = 0
    reLimitOrder: number = 0
    reLimitOrderIndicator: string = ''

    setCurrentControlIndex = (position: number, quantity: number) => 
    {
        this.selectedControl = position
        this.reOrderLimit(quantity)
        console.log(quantity)
    }

    reOrderLimit = (quantity: number) => {
       if(quantity === 0)
       {
          this.reLimitOrderIndicator = 'bg-red-600'
       } else if(quantity > 0 && quantity <= 10){
          this.reLimitOrderIndicator = 'bg-green-600'        
       } else {
          this.reLimitOrderIndicator = ''
       }
       console.log(this.reLimitOrder)
    }

    autoSearchText = (event: any) => {
        console.log(event.target.value)
    }

    theChangeOption = (option: string) => {
      this.orderStatus = option
      console.log(`orderStatus - ${this.orderStatus}`)
    }

    CancelPackage(event: any)
    {
       this.ModalState = event
    }

    CheckPackageAvailability(event: any)
    {
       this.ModalState = event
    }

}