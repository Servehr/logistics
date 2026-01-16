import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent 
{
    title: string = 'Categories'
    ActionName: string = 'categories'

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
          { name: 'Super Admin', description: 'Super Admin', actions: ''},
          { name: 'Admin', description: 'Admin', actions: ''},
          { name: 'Rider', description: 'Rider', total: 420, actions: ''},
          { name: 'Merchant', description: 'Merchants', total: 854, actions: ''}
        ]
      } 
    ]

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
}