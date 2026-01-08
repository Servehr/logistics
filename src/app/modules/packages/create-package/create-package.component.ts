import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/service/shared/modal/modal.service';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent {

  title: string = 'Make Order'
  
  orderStatus:string = ''
  @Input() switchStatus:boolean = true
  @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
  @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'
  
  firstName:string = ''
  surName:string = ''  
  phoneNumber:string = ''
  colorStatus:string = ''

  ActionName: string = 'create-package'

  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

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
        { Header: 'Status', Column: 'status', show: true  }, 
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
  }]

  @Input() Action: boolean = true
  
  @Input() ViewAction: boolean = false

  @Input() SubViewAction: boolean = false

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
  }

  autoSearchText = (event: any) => {
     console.log(event.target.value)
  }

  changeStatus = (event: any) => 
  {
    this.switchStatus = event.switchStatus
    this.switchState = event.switchState
    this.switchingState = event.switchingState
  }

  theChangeOption = (option: string) => {
    this.orderStatus = option
    console.log(`orderStatus - ${this.orderStatus}`)
  }  

  sendData()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

  CloseCurrentModal()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
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
