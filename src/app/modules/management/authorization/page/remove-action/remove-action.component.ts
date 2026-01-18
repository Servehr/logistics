import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-action',
  templateUrl: './remove-action.component.html',
  styleUrls: ['./remove-action.component.css']
})
export class RemoveActionComponent 
{
   title: string = 'Remove Action'
      
   @Input() ModalState: string = ''
   @Input() UpperModalState: string = ''
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
   
   CloseUpperModal()
   {
     this.UpperModalState = ''
     this.FromPackage.emit('')
   }
}