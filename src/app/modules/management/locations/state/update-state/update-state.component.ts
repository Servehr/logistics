import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-update-state',
  templateUrl: './update-state.component.html',
  styleUrls: ['./update-state.component.css']
})
export class UpdateStateComponent {

  title: string = 'Update State'
  value: string = ''
  rows: number = 3
  
  errorMessages = 
  { 
    roleName: 'Enter name for state'
  }
    
  stateOfOrigin:any[] = [
    { id: 'lagos', name:'Lagos' },
    { id: 'kuwait', name:'Kuwait' },
    { id: 'russia', name:'Moscow' }
  ] 

   @Input() ModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()


   updateState: FormGroup;
      
   constructor(private store: Store<AppState>)
   { 
     this.updateState = new FormGroup(
        {
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