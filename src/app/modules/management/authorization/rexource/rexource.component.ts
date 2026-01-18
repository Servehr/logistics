import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rexource',
  templateUrl: './rexource.component.html',
  styleUrls: ['./rexource.component.css']
})
export class RexourceComponent 
{
    title: string = 'Resources'
    ActionName: string = 'rexource'

    @Input() Action: boolean = true
    @Input() ModalState: string = ''
    @Input() ViewAction: boolean = false
                    
    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Name', Column: 'name', show: true }, 
            { Header: 'Description', Column: 'description', show: true  },
            { Header: 'No of Pages', Column: 'pages', show: true  },
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { name: 'Overview', description: 'Overview', pages: 8, actions: ''},
          { name: 'Merchant', description: 'Merchant', pages: 3, actions: ''},
          { name: 'Customers', description: 'Customers', pages: 10, total: 420, actions: ''},
          { name: 'Orders', description: 'Orders', pages: 12, total: 854, actions: ''},
          { name: 'Shelves', description: 'Shelves', pages: 3, total: 854, actions: ''},
          { name: 'Riders', description: 'Riders', pages: 8, total: 854, actions: ''},
          { name: 'Reports', description: 'Reports', pages: 9, total: 854, actions: ''},
          { name: 'Account', description: 'Account', pages: 1, total: 854, actions: ''},
          { name: 'Staffs', description: 'Merchants', pages: 10, total: 854, actions: ''},
          { name: 'Transactions', description: 'Merchants', pages: 14, total: 854, actions: ''},
          { name: 'Management', description: 'Merchants', pages: 5, total: 854, actions: ''},
          { name: 'Inventory', description: 'Merchants', pages: 4, total: 854, actions: ''},
          { name: 'Settings', description: 'Merchants', pages: 7, total: 854, actions: ''}
        ]
      } 
    ]

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
}