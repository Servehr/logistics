import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.css']
})
export class RiderDetailsComponent {

  title: string = 'Rider Information'
  value: string = ''
  @Input() disabled:boolean = false
   
  @Input() ModalState: string = ''
  @Output() FromPackage: EventEmitter<string> = new EventEmitter()

  CloseCurrentModal()
  {
    this.ModalState = ''
    this.FromPackage.emit('')
  }

}
