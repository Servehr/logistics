import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'buttonn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent 
{
    @Input() label: string = ''
    @Input() type: string = ''
    @Input() disabled: Boolean = false

    @Output() sendData: EventEmitter<void> = new EventEmitter()

    submit = () =>
    {
        this.sendData.emit()
    }

}
