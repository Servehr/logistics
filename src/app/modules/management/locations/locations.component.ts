import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/service/shared/modal/modal.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent 
{
    title: string = 'Locations'
                    
    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'
     
    constructor(public modalService: ModalService){}
        
}
