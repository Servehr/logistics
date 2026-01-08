import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css']
})
export class ShelvesComponent { 

  title: string = 'Order Location'
  
  TableTitle: string = 'Shelves'
  
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()
  @Input() labelName: string = ''

  @Input() Action: boolean = false
  @Input() Availability: boolean = true
  @Input() ViewAction: boolean = false
  @Input() ActionName: string = 'shelves'
  
  @Input() Header: any[] = [
    {
      "order": [        
        { Header: 'States', Column: 'states', show: true },
        { Header: 'Available Orders', Column: 'availableOrders', show: true  },
        { Header: 'Status', Column: 'status', show: true  }, 
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
      ]
  }]

  sendData()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

  OpenAndClose()
  {
     this.ModalState = 'product-on-shelve'
  }
  

  CancelPackage(event: any)
  {
    this.ModalState = event
  }
  

  CheckShelveOrderLocation(event: any)
  {
     this.ModalState = event
  }
  

}

