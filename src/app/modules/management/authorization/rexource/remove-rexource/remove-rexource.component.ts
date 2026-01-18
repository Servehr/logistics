import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-rexource',
  templateUrl: './remove-rexource.component.html',
  styleUrls: ['./remove-rexource.component.css']
})
export class RemoveRexourceComponent 
{
   title: string = 'Remove Resource'
      
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