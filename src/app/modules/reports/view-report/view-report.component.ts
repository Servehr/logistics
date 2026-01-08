import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent {

  title: string = 'Report Detail'
  firstName:string = ''
  surName:string = ''  
  phoneNumber:string = ''

  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

  @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Merchant', Column: 'merchant', show: true }, 
            { Header: 'Receiver', Column: 'receiver', show: true  }, 
            { Header: 'Rider', Column: 'rider', show: true  }, 
            { Header: 'Destination', Column: 'destination', show: true  },
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
        merchants: [                
          { merchant: 'Ebere', receiver: 'Uzochukwu', rider: 80973764764, destination: 'eberechukwu90087@gmail.com',  status: 'delivered', actions: ''},
          { merchant: 'Marcus', receiver: 'Nnamadi', rider: 7075747333, destination: 'nnamarcus12@yahoo.com',  status: 'Not Available',  actions: ''},
          { merchant: 'Chris', receiver: 'Donaltus', rider: 8023384222, destination: 'chris001@gmail.com',  status: 'Not Delivered',  actions: ''},
          { merchant: 'Busayo', receiver: 'Oluwapelumi', rider: 9087439823, destination: 'oluwabusayopelumi@ymail.com',  status: 'Delievered',  actions: ''}
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
