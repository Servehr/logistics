import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {

  title: string = 'Customer Availability'
  
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
