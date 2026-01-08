import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface ISelectOptionTypes {
  options: string | number
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
    
   @Input() name: string | number = ''
   @Input() options: any[] = [{ key: '', value:'' }]
   @Output() changedOption: EventEmitter<string> = new EventEmitter()
   message: string = ''
   incomingData: string = ''

   optionChange = (event: any) =>
   {
      this.message = ''
      this.incomingData = event.target.value
      switch (this.incomingData) {
        case '-1':    
          this.message = 'Please, select an option'
          this.changedOption.emit('')
          break;      
        default:
          this.changedOption.emit(this.incomingData)
          break;
      }
   }

}
