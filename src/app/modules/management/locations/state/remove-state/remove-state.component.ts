import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-state',
  templateUrl: './remove-state.component.html',
  styleUrls: ['./remove-state.component.css']
})
export class RemoveStateComponent   
{
   title: string = 'Remove State'
      
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
