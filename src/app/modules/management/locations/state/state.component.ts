import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IsSelectionMake, CheckNote } from 'src/app/auth/login/login.component';
import { CompanyNameRequiredAndLength } from 'src/app/modules/merchants/new-merchant/new-merchant.component';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent 
{
    title: string = 'States'
    ActionName: string = 'states'

    @Input() Action: boolean = true
    @Input() ModalState: string = ''
    @Input() ViewAction: boolean = false
                    
    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Name', Column: 'name', show: true },
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { name: 'Lagos', actions: ''},
          { name: 'Edo', actions: ''},
          { name: 'Calabar', total: 420, actions: ''},
          { name: 'Cape Town', total: 854, actions: ''}
        ]
      } 
    ]
  
  errorMessages = 
  { 
    CompanyNameRequired: 'Enter Company Name', 
    selectionRequired: 'Make selection',
    CompanyLocationRequired: 'Select State', 
    isNoted: 'Enter Detail'
    // isNoted: { msg: 'Enter Detail' }
  }
    
  stateOfOrigin:any[] = [
    { id: 'lagos', name:'Lagos' },
    { id: 'kuwait', name:'Kuwait' },
    { id: 'russia', name:'Moscow' }
  ] 
  
  newState: FormGroup;
    
  constructor(private store: Store<AppState>, private router: Router)
  {
     this.newState = new FormGroup(
     {
        states: new FormControl('', [IsSelectionMake])
     })    
  }

  CloseCurrentModal(event: any)
  {
    this.ModalState = event
  }

}