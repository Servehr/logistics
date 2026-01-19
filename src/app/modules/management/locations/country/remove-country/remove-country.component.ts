import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-country',
  templateUrl: './remove-country.component.html',
  styleUrls: ['./remove-country.component.css']
})
export class RemoveCountryComponent  
{
   title: string = 'Remove Role'
      
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
