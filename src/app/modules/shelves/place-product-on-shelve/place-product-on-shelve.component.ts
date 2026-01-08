import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordRequiredAndLength } from 'src/app/auth/login/login.component';

@Component({
  selector: 'app-place-product-on-shelve',
  templateUrl: './place-product-on-shelve.component.html',
  styleUrls: ['./place-product-on-shelve.component.css']
})
export class PlaceProductOnShelveComponent {

  title: string = 'Place product on shelve'

  Location: any = [
      { id: '1', name:'Lagos' },
      { id: '2', name:'Ogun' },
      { id: '3', name:'Edo' },
      { id: '4', name:'Calabar' }
  ]

  placeProduct: FormGroup;
  
  constructor() 
  { 
      this.placeProduct = new FormGroup(
      {
        state: new FormControl('', [Validators.required]),
        location: new FormControl('', [Validators.required]),
      }
    )
  }   
   
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

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
