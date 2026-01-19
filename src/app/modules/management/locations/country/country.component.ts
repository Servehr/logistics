import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent 
{
    title: string = 'Countries'
    ActionName: string = 'countries'

    @Input() Action: boolean = true
    @Input() ModalState: string = ''
    @Input() ViewAction: boolean = false
                    
    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Name', Column: 'name', show: true },
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { name: 'Nigeria', actions: ''},
          { name: 'South Africa', actions: ''},
        ]
      } 
    ]

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }
}