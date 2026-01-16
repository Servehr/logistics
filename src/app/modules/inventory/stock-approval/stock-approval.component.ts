import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-stock-approval',
  templateUrl: './stock-approval.component.html',
  styleUrls: ['./stock-approval.component.css']
})
export class StockApprovalComponent {

    title: string = 'Inventory'
    colorStatus:string = ''

    ModalState: string = ''
    ActionName: string = 'inventory-approval'

    TabPages: string[] = ["Stock", "Approval"]
    page: number = 0

    @Input() labelName: string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Header: any[] = [
      { Header: 'Product', Column: 'name', show: true }, 
      { Header: 'Quantity', Column: 'quantity', show: true  },
      { Header: 'Actions', Column: '', show: true  }
    ]
    
    @Input() RowAndColumn: any[] = [
       { name: 'Dangote PLC', quantity: 23, actions: ''},
       { name: 'Ebano Supermarket', quantity: 13, actions: ''},
       { name: 'Unilever PLC', quantity: 8, actions: ''},
       { name: 'Ebano Supermarket', quantity: 14, actions: ''},
       { name: 'Unilever PLC', quantity: 28, actions: ''},
       { name: 'Ebano Supermarket', quantity: 11, actions: ''},
       { name: 'Unilever PLC', quantity: 81, actions: ''},
       { name: 'Emmanuchukwu Uzochukwu & Son', quantity: 18, actions: ''}
    ]

    @Input() Action: boolean = true
    @Input() Availability: boolean = true
    @Input() ViewAction: boolean = false


    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'

    @Input() name = 'Select an option'
    @Input() options = [
        { key: '-1', value:'Select an option' },
        { key: 'merchants', value:'Merchant' },
        { key: 'orders', value:'Orders' },
        { key: 'reOrderLimit', value:'Re-Order Limit' },
        { key: 'inStock', value:'In Stock' },
        { key: 'outOfStock', value:'Out of Stock' },
    ]

    @Input() pages = 'Select No of Pages'
    @Input() pageNumbers = [
      { key: '20', value:'20' },
      { key: '30', value:'30' },
      { key: '50', value:'50' },
      { key: '75', value:'75' },
      { key: '100', value:'100' },
      { key: '150', value:'150' },
      { key: '200', value:'200' },
      { key: '500', value:'500' }
    ]

    orderStatus:string = ''
    @Input() deliveryStatus = [
      { key: '-1', value:'Delivered Or Not' },
      { key: 'no', value:'No' },
      { key: 'yes', value:'Yes' },
      { key: 'yesBut', value:'Yes With But' }
    ]

    @Input() riders = [
      { key: '-1', value:'Find Rider' },
      { key: '1', value:'Emeka' },
      { key: '2', value:'Adamu' }
    ]

    @Input() buttonText:string = 'Search'
    @Input() buttonColor:string = 'bg-CompanyBlue'
    @Input() reason:string = ''

    @Output() FromPackage: EventEmitter<string> = new EventEmitter()


    changeStatus = (event: any) => 
    {
      this.switchStatus = event.switchStatus
      this.switchState = event.switchState
      this.switchingState = event.switchingState
    }

    theChangeOption = (option: string) => {
      this.orderStatus = option
      console.log(`orderStatus - ${this.orderStatus}`)
    }

    CheckPackageAvailability(event: any)
    {
       this.ModalState = event
    }

    CancelPackage(event: any)
    {
       this.ModalState = event
    }

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
       this.FromPackage.emit('')
    }

    setPage(page: any)
    {
       this.page = page
    }

}