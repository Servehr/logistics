import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent  {

   title: string = 'Update Department'
   value: string = ''
   rows: number = 3
  
   errorMessages = 
   { 
     roleName: 'Enter name for department', 
     note: 'Enter description for department'
    }

   @Input() ModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   updateDepartment: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.updateDepartment = new FormGroup(
        {
          departmentName: new FormControl('', [Validators.required]),
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
