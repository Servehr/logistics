import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IsSelectionMake } from 'src/app/auth/login/login.component';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-local-government',
  templateUrl: './local-government.component.html',
  styleUrls: ['./local-government.component.css']
})
export class LocalGovernmentComponent 
{
    title: string = 'States'
    ActionName: string = 'local-government'

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
  
  newLGA: FormGroup;
    
  constructor(private store: Store<AppState>, private router: Router)
  {
     this.newLGA = new FormGroup(
     {
        country: new FormControl('', [Validators.required]),
        states: new FormControl('', [Validators.required])
     })    
  }

  CloseCurrentModal(event: any)
  {
    this.ModalState = event
  }

}