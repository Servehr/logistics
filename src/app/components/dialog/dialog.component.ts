import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../service/shared/modal/modal.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    
  constructor(public modalService: ModalService){
     this.modalService.OpenCloseDialog = false
  }

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
