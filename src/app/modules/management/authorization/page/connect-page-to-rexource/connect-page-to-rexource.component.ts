import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-connect-page-to-rexource',
  templateUrl: './connect-page-to-rexource.component.html',
  styleUrls: ['./connect-page-to-rexource.component.css']
})
export class ConnectPageToRexourceComponent {

   title: string = 'Connect Page To Resource'
   value: string = ''

   @Input() ModalState: string = ''
   @Input() box:string = 'true'
   
   @Output() FromPackage: EventEmitter<string> = new EventEmitter()
   @Input() summaries: { 'text': string, 'nos': number }[] = [
      { 'text': 'Staff', 'nos': 15 },
      { 'text': 'Managers', 'nos': 2 },
      { 'text': 'CSA', 'nos': 5 },
      { 'text': 'Riders Manager', 'nos': 4 },
      { 'text': 'Whare House Manager', 'nos': 3 },
      { 'text': 'Merchants', 'nos': 549 },
      { 'text': 'Riders', 'nos': 148 },
      { 'text': 'Accountant', 'nos': 1 }
   ]

  //  @Input() summaries: { 'text': string }[] = [
  //     { 'text': 'Staff' },
  //     { 'text': 'Managers' },
  //     { 'text': 'CSA' },
  //     { 'text': 'Riders Manager' },
  //     { 'text': 'Whare House Manager'  },
  //     { 'text': 'Merchants' },
  //     { 'text': 'Riders' },
  //     { 'text': 'Accountant' }
  //  ]

   CloseCurrentModal()
   {
     this.ModalState = ''
     this.FromPackage.emit('')
   }

   call()
   {
      alert("Great")
   }

   callMe()
   {
      alert("Triumph")
   }

}