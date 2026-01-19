import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-update-local-government',
  templateUrl: './update-local-government.component.html',
  styleUrls: ['./update-local-government.component.css']
})
export class UpdateLocalGovernmentComponent  {

  title: string = 'Update Local Government'
  value: string = ''
  rows: number = 3
  
  errorMessages = 
  { 
    roleName: 'Enter name for local government'
  }
    
  stateOfOrigin:any[] = [
    { id: 'lagos', name:'Lagos' },
    { id: 'kuwait', name:'Kuwait' },
    { id: 'russia', name:'Moscow' }
  ] 

   @Input() ModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   updateLocalGovernment: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.updateLocalGovernment = new FormGroup(
        {
          country: new FormControl('', [Validators.required]),
          states: new FormControl('', [Validators.required])
        }
     )    
   }

   CloseCurrentModal()
   {
     this.ModalState = ''
     this.FromPackage.emit('')
   }

}