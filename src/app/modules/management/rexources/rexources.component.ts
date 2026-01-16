import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rexources',
  templateUrl: './rexources.component.html',
  styleUrls: ['./rexources.component.css']
})
export class RexourcesComponent 
{
    title: string = 'Resource'
    ActionName: string = 'resource'

    @Input() Action: boolean = true
    @Input() ModalState: string = ''
    @Input() ViewAction: boolean = false
                    
    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Name', Column: 'name', show: true }, 
            { Header: 'Description', Column: 'description', show: true  },
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { name: 'Overview', description: 'Overview', actions: ''},
          { name: 'Merchant', description: 'Merchant', actions: ''},
          { name: 'Customers', description: 'Customers', actions: ''},
          { name: 'Orders', description: 'Orders', actions: ''},
          { name: 'Shelves', description: 'Shelves', actions: ''},
          { name: 'Riders', description: 'Riders', actions: ''},
          { name: 'Reports', description: 'Reports', actions: ''},
          { name: 'Account', description: 'Account', actions: ''},
          { name: 'Staffs', description: 'Staffs', actions: ''},
          { name: 'Transactions', description: 'Transactions', actions: ''},
          { name: 'Management', description: 'Management', actions: ''},
          { name: 'Inventory', description: 'Inventory', actions: ''},
          { name: 'Settings', description: 'Settings', actions: ''}
        ]
      } 
    ]

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
}