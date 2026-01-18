import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.css']
})
export class NewDepartmentComponent {

   title: string = 'New Department'
   value: string = ''
   rows: number = 3
  
   errorMessages = 
   { 
     roleName: 'Enter name for departmnet', 
     note: 'Enter description for departmnet'
    }

   @Input() ModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   newDepartment: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.newDepartment = new FormGroup(
        {
          department: new FormControl('', [Validators.required]),
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