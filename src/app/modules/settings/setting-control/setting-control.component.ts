import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setting-control',
  templateUrl: './setting-control.component.html',
  styleUrls: ['./setting-control.component.css']
})
export class SettingControlComponent {

   @Input() role: number = -1
   @Input() resource: {  id: number, name: string } = { id: -1, name: "" }

   @Input() label: string = ''
   @Input() switchStatus:boolean = true
   @Input() switchState: string = 'flex w-20 h-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
   @Input() switchingState: string = 'w-10 h-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

   changeStatus = (event: any) => 
   {
     this.switchStatus = event.switchStatus
     this.switchState = event.switchState
     this.switchingState = event.switchingState
   }

}
