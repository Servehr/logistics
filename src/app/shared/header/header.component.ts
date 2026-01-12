import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    menu: boolean = false

    @Input() toggleSideBarMenu: boolean = false

    @Output() toggleSideBar: EventEmitter<boolean> = new EventEmitter()

    OpenAndClose()
    {
       this.menu = true
       this.toggleSideBar.emit(true)
    }



}
