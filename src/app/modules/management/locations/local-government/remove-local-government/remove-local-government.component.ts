import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-local-government',
  templateUrl: './remove-local-government.component.html',
  styleUrls: ['./remove-local-government.component.css']
})
export class RemoveLocalGovernmentComponent 
{
   title: string = 'Remove Local Government'
      
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
