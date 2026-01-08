import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-action-on-merchant',
  templateUrl: './action-on-merchant.component.html',
  styleUrls: ['./action-on-merchant.component.css']
})
export class ActionOnMerchantComponent {

  title: string = 'Take Action'
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

  Actions: any = [
      { id: '1', name:'Block' },
      { id: '2', name:'Suspend' },
      { id: '3', name:'Activate' },
      { id: '4', name:'Disengage' }
  ] 

  actionOnRider: FormGroup;

  constructor() 
  { 
      this.actionOnRider = new FormGroup(
      {
        action: new FormControl('', [Validators.required])
      }
    )
  }  

  sendData()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

  CloseCurrentModal()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

}