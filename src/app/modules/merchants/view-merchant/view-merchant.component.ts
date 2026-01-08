import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-merchant',
  templateUrl: './view-merchant.component.html',
  styleUrls: ['./view-merchant.component.css']
})
export class ViewMerchantComponent {
    
  title: string = 'RachamHub - Merchants'
       
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

  sendData()
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
