import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-page-actions',
  templateUrl: './page-actions.component.html',
  styleUrls: ['./page-actions.component.css']
})
export class PageActionsComponent {

   title: string = 'Page Actions'
   value: string = ''
   rows: number = 3

   actions: any[] = [
     { actionName: 'Create Role', description: 'Create role Description' }, 
     { actionName: 'Update Role', description: 'Update role description' },
     { actionName: 'Update Role', description: 'Update role description' },
     { actionName: 'Update Role', description: 'Update role description' },
     { actionName: 'Update Role', description: 'Update role description' },
     { actionName: 'Update Role', description: 'Update role description' },
     { actionName: 'Update Role', description: 'Update role description' },
     { actionName: 'Update Role', description: 'Update role description' }
   ]
  
   errorMessages = 
   { 
     roleName: 'Enter name for action', 
     note: 'Enter description for action'
    }

   @Input() ModalState: string = ''
   @Input() UpperModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   newAction: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.newAction = new FormGroup(
        {
          actionName: new FormControl('', [Validators.required]),
          note: new FormControl('', [Validators.required])
        }
     )    
   }

   CloseModal()
   {
     this.ModalState = ''
     this.FromPackage.emit('')     
   }

   CloseCurrentModal()
   {
     this.UpperModalState = ''
    //  this.FromPackage.emit('')
   }

   a()
   {

   }

   Close()
   {
     this.UpperModalState = ''
    //  this.FromPackage.emit('')
   }

}