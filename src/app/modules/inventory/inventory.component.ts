import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

    title: string = 'Inventory'
    status: string = 'Successful'
    message:string = 'Post Sucessfully Sent'
    colorStatus:string = ''

    ModalState: string = ''
    ActionName: string = 'inventory'

    TabPages: string[] = ["Stock", "Approval"]
    page: number = 0

    @Input() labelName: string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Header: any[] = [
      { Header: 'Product', Column: 'name', show: true }, 
      { Header: 'Price', Column: 'price', show: true  }, 
      { Header: 'Quantity', Column: 'quantity', show: true  },
      { Header: 'Limit', Column: 'limit', show: true  },
      { Header: 'Remaining', Column: 'remaining', show: true  },
      { Header: 'Actions', Column: '', show: true  }
    ]
    
    @Input() RowAndColumn: any[] = [
       { name: 'Dangote PLC', price: 4, quantity: 'Uzochukwu Emeka', limit: '080973764764', 'remaining': 35, actions: ''},
       { name: 'Ebano Supermarket', price: 2, quantity: 'Nnamadi Azikwe', limit: '07075747333', 'remaining': 200, actions: ''},
       { name: 'Unilever PLC', price: 8, quantity: 'Donaltus Benjamin', limit: '08023384222', 'remaining': 45, actions: ''},
       { name: 'Ebano Supermarket', price: 2, quantity: 'Nnamadi Azikwe', limit: '07075747333', 'remaining': 19, actions: ''},
       { name: 'Unilever PLC', price: 8, quantity: 'Donaltus Benjamin', limit: '08023384222', 'remaining': 43, actions: ''},
       { name: 'Ebano Supermarket', price: 2, quantity: 'Nnamadi Azikwe', limit: '07075747333', 'remaining': 27, actions: ''},
       { name: 'Unilever PLC', price: 8, quantity: 'Donaltus Benjamin', limit: '08023384222', 'remaining': 21, actions: ''},
       { name: 'Emmanuchukwu Uzochukwu & Son', price: 6, quantity: 'Oluwapelumi Oluwatosin', limit: '09087439823',  'remaining': 3, actions: ''}
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

    alertCode = (color: string) => 
    {
        switch (color) {
          case 'error':            
            this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-red-600 rounded-lg mt-10'
            break;
          case 'success':
            this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-green-800 rounded-lg mt-10'        
            break;
          default:
            this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-purple-200 rounded-lg mt-10'
            break;
        }
        return this.colorStatus
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
    }

    setPage(page: any)
    {
       this.page = page
    }

}