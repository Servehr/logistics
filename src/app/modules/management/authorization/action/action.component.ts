import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent 
{
    title: string = 'Actions'
    ActionName: string = 'linkUnlink'

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
          { name: 'Create-Merchant', description: 'Create Merchant', pages: 8, actions: ''},
          { name: 'Update-Merchant', description: 'Update-Merchant', pages: 3, actions: ''},
          { name: 'Delete-Merchant', description: 'Delete-Merchant', pages: 10, total: 420, actions: ''},
          { name: 'Read-Merchant', description: 'Read-Merchant', pages: 12, total: 854, actions: ''},
        ]
      } 
    ]

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
}