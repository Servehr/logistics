import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-account',
  templateUrl: './remove-account.component.html',
  styleUrls: ['./remove-account.component.css']
})
export class RemoveAccountComponent {

  title: string = 'Delete Account'
   
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

