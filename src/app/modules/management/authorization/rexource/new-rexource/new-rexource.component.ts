import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-new-rexource',
  templateUrl: './new-rexource.component.html',
  styleUrls: ['./new-rexource.component.css']
})
export class NewRexourceComponent {

   title: string = 'New Resource'
   value: string = ''
   rows: number = 3
  
   errorMessages = 
   { 
     rexourceName: 'Enter name for resource', 
     note: 'Enter description for resource'
    }

   @Input() ModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   newRexource: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.newRexource = new FormGroup(
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
