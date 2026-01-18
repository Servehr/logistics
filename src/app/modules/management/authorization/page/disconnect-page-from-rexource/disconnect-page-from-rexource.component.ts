import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-disconnect-page-from-rexource',
  templateUrl: './disconnect-page-from-rexource.component.html',
  styleUrls: ['./disconnect-page-from-rexource.component.css']
})
export class DisconnectPageFromRexourceComponent {

   title: string = 'Disconnect Page From Resource'
   value: string = ''

   @Input() ModalState: string = ''
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()

   CloseCurrentModal()
   {
     this.ModalState = ''
     this.FromPackage.emit('')
   }

}