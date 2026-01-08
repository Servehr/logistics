import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-stock',
  templateUrl: './remove-stock.component.html',
  styleUrls: ['./remove-stock.component.css']
})
export class RemoveStockComponent {

  title: string = 'Delete Stock'
   
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
