import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    

  @Input() isOpenOrClose: string = ''

  @Output() CloseModal: EventEmitter<string> = new EventEmitter()

  @Input() title: string = 'x'

  @Input() wideTall: string = ''  

  CloseCurrentModal()
  {
     this.isOpenOrClose = ''
     this.CloseModal.emit("")
  }

}
