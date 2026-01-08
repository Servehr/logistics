import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent {

  title: string = 'Delete Order'
   
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
