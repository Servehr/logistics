import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

    OpenCloseDialog: boolean = false
    ViewOrderDialog: boolean = false

    addDialog: boolean = false
    showDialog: boolean = false
    closeDialog: boolean = false
    showOrderDialog: boolean = false
    showPlaceOnShelfDialog: boolean = false
    addOrderDialog: boolean = false
    customerDetailDialog: boolean = false
    deliveredDialog: boolean = false
    assignOrderDialog: boolean = false
    executionStateDialog: boolean = false
    destinationsDialog: boolean = false
    upateStockDialog: boolean = false
    valueToUpdate: number = 0
    successDialog: boolean = false

    constructor() {}

    show()
    {
      alert("Great Mind")
    }

}
