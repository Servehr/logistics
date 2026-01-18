import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css']
})
export class ShelvesComponent { 
  
  title: string = 'Shelves'

  @Input() box:string = 'true'  
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
  
  @Input() summaries: { 'name': string, 'state': string, 'lga': string, 'qty': number, date: string }[] = [ 
     { 'name': 'Emmanuel Adebayo', 'state': 'Ogun', 'lga': 'Lagos Island', qty: 12, date: '2011' },
     { 'name': 'Christopher Ugochukwu Nnamdi', 'state': 'Lagos', 'lga': 'Apapa', qty: 4, date: '2014'  },
     { 'name': 'CSA', 'state': 'Ogun', 'lga': 'Ifako Ijaye', qty: 6, date: '2015'  },
     { 'name': 'Riders Manager', 'state': 'Lagos', 'lga': 'Amuwo Odofin', qty: 1, date: '2011'  },
     { 'name': 'Whare House Manager', 'state': 'Lagos', 'lga': 'Badagry', qty: 7, date: '2010'  },
     { 'name': 'Merchants', 'state': 'Kwara', 'lga': 'Iyana Iba', qty: 14, date: '2023'  },
     { 'name': 'Riders', 'state': 'Edo', 'lga': 'Victoria Island', qty: 2, date: '2026'  },
     { 'name': 'Accountant', 'state': 'Lagos', 'lga': 'Ojo', qty: 12, date: '2030'  }
  ]

  Location: any = [
      { id: '1', name:'Lagos' },
      { id: '2', name:'Ogun' },
      { id: '3', name:'Edo' },
      { id: '4', name:'Calabar' }
  ]

  
  orderSelection: FormGroup;
    
  constructor() 
  { 
     this.orderSelection = new FormGroup(
     {
       state: new FormControl('', [Validators.required]),
       location: new FormControl('', [Validators.required])
     }
    )
  }

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

  call()
  {
     alert("Great")
  }

  callMe()
  {
     alert("Triumph")
  }
  

}

