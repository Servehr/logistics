import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent  
{

    title: string = 'Account Details'
    ModalState: string = ''

    modalStatus: boolean = false
    ActionName: string = 'account'

    @Input() Action: boolean = true
    @Input() ViewAction: boolean = false

    @Input() Header: any[] = [
      { Header: 'Bank', Column: 'name', show: true }, 
      { Header: 'Account Name', Column: 'price', show: true  }, 
      { Header: 'Account Number', Column: 'quantity', show: true  },
      { Header: 'Account Type', Column: 'discount', show: true  },
      { Header: 'Actions', Column: '', show: true  }
    ]
    
    @Input() RowAndColumn: any[] = [
      { name: 'Dangote PLC', price: 4, quantity: 'Uzochukwu Emeka', discount: '080973764764', actions: ''},
      { name: 'Unilever PLC', price: 8, quantity: 'Donaltus Benjamin', discount: '08023384222', actions: ''},
      { name: 'Emmanuchukwu Uzochukwu & Son', price: 6, quantity: 'Oluwapelumi Oluwatosin', discount: '09087439823', actions: ''}
    ]

    isOpenOrClose()
    {
       this.modalStatus = !this.modalStatus
    }

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }

}