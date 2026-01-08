import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetClearErrorMessage } from 'src/app/state/actions/spinner.action';
import AppState from 'src/app/state/app.state';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

    @Input() status: string = 'Sucessful'
    @Input() id: string = ''
    @Input() colorStatus: string = ''

    show: Boolean = true

    constructor(private store: Store<AppState>)
    {
      setTimeout(() => 
      {
         this.store.dispatch(SetClearErrorMessage({ msg: "", statusCode: 400, operation: "authenticate-user"  }))
      }, 5000)
    }

}
