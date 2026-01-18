import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-update-rexource',
  templateUrl: './update-rexource.component.html',
  styleUrls: ['./update-rexource.component.css']
})
export class UpdateRexourceComponent {

   title: string = 'Update Resource'
   value: string = ''
   rows: number = 3
  
   errorMessages = 
   { 
     roleName: 'Enter name for resource', 
     note: 'Enter description for resource'
    }

   @Input() ModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   updateRexource: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.updateRexource = new FormGroup(
        {
          rexourceName: new FormControl('', [Validators.required]),
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