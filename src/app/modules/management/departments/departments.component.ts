import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent 
{
    title: string = 'Departments'
    ActionName: string = 'departments'

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
          { name: 'Management', description: 'Management', actions: ''},
          { name: 'Human Resource', description: 'Human Resource', actions: ''},
          { name: 'Sales', description: 'Sales', actions: ''},
          { name: 'Procurement', description: 'Procurements', actions: ''}
        ]
      } 
    ]

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
}