import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link-unlink-action',
  templateUrl: './link-unlink-action.component.html',
  styleUrls: ['./link-unlink-action.component.css']
})
export class LinkUnlinkActionComponent 
{
   title: string = 'Take Action'
      
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