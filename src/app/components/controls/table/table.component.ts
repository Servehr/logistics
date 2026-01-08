import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../../service/shared/modal/modal.service'
import { SetValueToUpdate } from 'src/app/state/actions/user.actions';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';
import { User } from 'src/app/state/model/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

    @Input() Header: any[] = [      
      { Header: 'Firstname', Column: 'firstname', show: true }, 
      { Header: 'Surname', Column: 'surname', show: true  }, 
      { Header: 'Phone Number', Column: 'phone_number', show: true  }, 
      { Header: 'Email', Column: 'email', show: true  },
      { Header: 'Employee ID', Column: 'employee_id', show: true  }, 
      { Header: 'Actions', Column: '', show: true  }
    ]
    @Input() ViewAction: boolean = false

    //package/order   
    @Input() Action: boolean = false
    @Input() TableType: string = ''
    @Input() SubViewAction: boolean = false
    @Input() Availability: boolean = false
    @Input() ActionName: string = ''
    @Input() Shelve: boolean = false
    @Output() userToUpdate: EventEmitter<number> = new EventEmitter()
    @Output() ModalState: EventEmitter<string> = new EventEmitter()
    
    @Input() RowAndColumn: User[] | undefined | any

    @Input() RowAndColumns: any[] = [
      {
        merchants: [{ name: '', location: '', total: 0, order: ' 0 | 0 ', availability: '', actions: ''}]
      },
      {
        riders: [{ name: '', delivered: '', pending: 0, totalAmount: ' 0 | 0 ', availability: '',  actions: ''}]
      },
      {
        requests: [{ name: '', by: '', status: 0, amount: '0', availability: '',   actions: ''}]
      },
      {
        transactions: [{ merchant: '', delivered: '', pending: 0, totalAmount: ' 0 | 0 ', availability: '',   actions: ''}]
      }
    ]

    constructor(private store: Store<AppState>, public modalService: ModalService){}

    addOrUpdate = (row: User, i: number) => 
    {
        this.store.dispatch(SetValueToUpdate({ user: row, status: true, position: i }))
        this.modalService.addDialog = true
    }

    ViewPackage()
    {
        this.ModalState.emit('view-package')
    }

    CheckAvailability()
    {
       this.ModalState.emit('package-availability')
    }

    CancelPackage()
    {
       this.ModalState.emit('cancel-package')
    }

    UpdatePackage(column: any, i: any)
    { 
       this.ModalState.emit('update-package')
    }

    ShelveRoom()
    {
       this.ModalState.emit('shelve-room')      
    }

    SeeRider()
    {
       this.ModalState.emit('rider-detail')   
    }

    UpdateRider(column: any, i: any)
    {
       this.ModalState.emit('update-rider')   
    }

    ActionOn(column: any, i: any, action: string)
    {
       this.ModalState.emit(action)   
    }

    ViewReport(column: any, i: any)
    {
       this.ModalState.emit('view-report')   
    }

    DownloadReport(column: any, i: any)
    {
       this.ModalState.emit('download-report')   
    }

    //staffs
    ViewStaff()
    {
       this.ModalState.emit('view-staff')       
    }

    ViewOn(action: string)
    {
       this.ModalState.emit(action)       
    }

    UpdateOn(column: any, i: any, action: string)
    {
       this.ModalState.emit(action)       
    }

    Remove(column: any, i: any, action: string)
    {
       this.ModalState.emit(action)       
    }

}
