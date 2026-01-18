import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-update-action',
  templateUrl: './update-action.component.html',
  styleUrls: ['./update-action.component.css']
})
export class UpdateActionComponent {

   title: string = 'Update Action'
   value: string = ''
   rows: number = 3
  
   errorMessages = 
   { 
     actionName: 'Enter name for action', 
     note: 'Enter description for action'
    }

   @Input() ModalState: string = ''
   @Input() UpperModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   newRole: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.newRole = new FormGroup(
        {
          roleName: new FormControl('', [Validators.required]),
          note: new FormControl('', [Validators.required])
        }
     )    
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