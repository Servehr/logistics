import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-managemant',
  templateUrl: './managemant.component.html',
  styleUrls: ['./managemant.component.css']
})
export class ManagemantComponent {

    @Input() label: string = ''
    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    changeStatus = (event: any) => 
    {
      this.switchStatus = event.switchStatus
      this.switchState = event.switchState
      this.switchingState = event.switchingState
    }

}
