import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-department',
  templateUrl: './remove-department.component.html',
  styleUrls: ['./remove-department.component.css']
})
export class RemoveDepartmentComponent 
{
   title: string = 'Remove Department'
      
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
