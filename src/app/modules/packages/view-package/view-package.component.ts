import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent {

  title: string = 'Order Detail'
  firstName:string = ''
  surName:string = ''  
  phoneNumber:string = ''
  
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()
  @Input() Action: boolean = true  
  @Input() ViewAction: boolean = false

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

}
