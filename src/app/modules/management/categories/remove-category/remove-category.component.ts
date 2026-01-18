import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.component.html',
  styleUrls: ['./remove-category.component.css']
})
export class RemoveCategoryComponent 
{
   title: string = 'Remove Category'
      
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