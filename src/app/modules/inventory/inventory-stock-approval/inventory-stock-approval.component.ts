import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inventory-stock-approval',
  templateUrl: './inventory-stock-approval.component.html',
  styleUrls: ['./inventory-stock-approval.component.css']
})
export class InventoryStockApprovalComponent {

  title: string = 'Authorize Product'

  @Input() ModalState: string = ''
  @Input() Action: boolean = true  
  @Input() ViewAction: boolean = false
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

  approval()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

  decline()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }
  
  CloseCurrentModal()
  { 
     this.ModalState = ''
     this.FromPackage.emit('')
  }


}
