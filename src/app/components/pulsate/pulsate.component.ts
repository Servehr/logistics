import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pulsate',
  templateUrl: './pulsate.component.html',
  styleUrls: ['./pulsate.component.css']
})
export class PulsateComponent {

    @Input() summaries:any = [{ 'text': '', 'nos': 0 }]
    @Input() box:string = 'false'

}
