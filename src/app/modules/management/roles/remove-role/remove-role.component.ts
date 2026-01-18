import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-role',
  templateUrl: './remove-role.component.html',
  styleUrls: ['./remove-role.component.css']
})
export class RemoveRoleComponent 
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
