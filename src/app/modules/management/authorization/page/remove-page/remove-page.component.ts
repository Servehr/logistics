import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-page',
  templateUrl: './remove-page.component.html',
  styleUrls: ['./remove-page.component.css']
})
export class RemovePageComponent 
{
   title: string = 'Remove Page'
      
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