import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent 
{
    title: string = 'Actions'
    ActionName: string = 'page'

    @Input() Action: boolean = true
    @Input() ModalState: string = ''
    @Input() ViewAction: boolean = false
                    
    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Name', Column: 'name', show: true }, 
            { Header: 'Description', Column: 'description', show: true  },
            { Header: 'Resource', Column: 'resource', show: true  },
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { name: 'Create-Merchant', description: 'Create Merchant', resource: 8, actions: ''},
          { name: 'Update-Merchant', description: 'Update-Merchant', resource: 3, actions: ''},
          { name: 'Delete-Merchant', description: 'Delete-Merchant', resource: 10, total: 420, actions: ''},
          { name: 'Read-Merchant', description: 'Read-Merchant', resource: 12, total: 854, actions: ''},
        ]
      } 
    ]

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
}