import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent {

   title: string = 'New Role'
   value: string = ''
   rows: number = 3
  
   errorMessages = 
   { 
     roleName: 'Enter name for role', 
     note: 'Enter description for role'
    }

   @Input() ModalState: string = ''
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

}