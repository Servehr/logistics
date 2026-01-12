import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {

    @Input() toggleSideBar: boolean = false

    constructor()
    {
       console.log("Great Mind")
    }

    OpenSideBar(status: boolean)
    {
       console.log("Open Up")
       this.toggleSideBar = status
    }

    getIt()
    {
        this.toggleSideBar = false 
    }

    CloseSideBar(OpenOrClose: boolean)
    {
       this.toggleSideBar = OpenOrClose       
    }

}
