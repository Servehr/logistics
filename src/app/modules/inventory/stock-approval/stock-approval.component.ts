import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/service/shared/modal/modal.service';

@Component({
  selector: 'app-stock-approval',
  templateUrl: './stock-approval.component.html',
  styleUrls: ['./stock-approval.component.css']
})
export class StockApprovalComponent 
{
    title: string = 'Stock Approval - Merchants'
                
    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'
     
    constructor(public modalService: ModalService){}
}