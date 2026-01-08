import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/service/shared/modal/modal.service';

@Component({
  selector: 'dialog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() HeaderTitle: string = ''

  constructor(public modalService: ModalService){}
}
