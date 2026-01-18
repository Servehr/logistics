import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-add-action-to-page',
  templateUrl: './add-action-to-page.component.html',
  styleUrls: ['./add-action-to-page.component.css']
})
export class AddActionToPageComponent {

   title: string = 'Create Action'
   value: string = ''
   rows: number = 3
  
   errorMessages = 
   { 
     roleName: 'Enter name for action', 
     note: 'Enter description for action'
    }

   @Input() ModalState: string = ''
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

   CloseCurrentModal()
   {
     this.ModalState = ''
     this.FromPackage.emit('')
   }

}