import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/service/shared/modal/modal.service';
import { DynamicTabService } from 'src/app/service/shared/tab/dynamic-tab.service';

@Component({
  selector: 'app-privilege',
  templateUrl: './privilege.component.html',
  styleUrls: ['./privilege.component.css']
})
export class PrivilegeComponent 
{
    pageTitle:string = 'Authorization'

    constructor(public dynamicTabService: DynamicTabService, public modalService: ModalService){}


    components = this.dynamicTabService.getDynamicComponents()

    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'
         
    
}