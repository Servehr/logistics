import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/state/app.state';
import { isAuthenticated } from 'src/app/state/selector/auth.selector';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

   title: string = "Overview"
   users = ["first", "second", "third", "fourth", "fifth", "six", "seven", "eight"]

   @Input() summaries: { 'text': string, 'nos': number }[] = [
      { 'text': 'Staff', 'nos': 15 },
      { 'text': 'Managers', 'nos': 2 },
      { 'text': 'CSA', 'nos': 5 },
      { 'text': 'Riders Manager', 'nos': 4 },
      { 'text': 'Whare House Manager', 'nos': 3 },
      { 'text': 'Merchants', 'nos': 549 },
      { 'text': 'Riders', 'nos': 148 },
      { 'text': 'Accountant', 'nos': 1 }
   ]

   @Input() Header: any[] = [
    {
        "merchant": [        
            { Header: 'Name', Column: 'name', show: true }, 
            { Header: 'Location', Column: 'location', show: true  }, 
            { Header: 'Total Order', Column: 'total', show: true  }, 
            { Header: 'Order Process', Column: 'order', show: true  }, 
            { Header: 'Actions', Column: '', show: false  }
        ],
        "rider": [        
          { Header: 'Name', Column: 'name', show: true }, 
          { Header: 'Delivered', Column: 'delivered', show: true  }, 
          { Header: 'Pending', Column: 'pending', show: true  }, 
          { Header: 'Total Amount', Column: 'totalAmount', show: true  }, 
          { Header: 'Actions', Column: '', show: false  }
        ],
        "request": [        
          { Header: 'Name', Column: 'name', show: true }, 
          { Header: 'By', Column: 'by', show: true  }, 
          { Header: 'Status', Column: 'status', show: true  }, 
          { Header: 'Amount', Column: 'amount', show: true  }, 
          { Header: 'Actions', Column: '', show: false  }
        ],
        "transaction": [        
          { Header: 'Name', Column: 'merchant', show: true }, 
          { Header: 'Delivered', Column: 'delivered', show: true  }, 
          { Header: 'Pending', Column: 'pending', show: true  }, 
          { Header: 'Total Amount', Column: 'totalAmount', show: true  }, 
          { Header: 'Actions', Column: '', show: false  }
        ]
    }
   ]

   @Input() RowAndColumn: any[] = [
      {
        merchants: [                
          { name: 'Elin Electronics', location: 'Victoria Island', total: 1200, order: '1120 | 80 ', actions: ''},
          { name: 'Unilever', location: 'MaryLand', total: 5420, order: '5415 | 5 ', actions: ''},
          { name: 'Dangote', location: 'Ikeja', total: 420, order: '400 | 20 ', actions: ''},
          { name: 'Ebano Supermarket', location: 'MaryLand', total: 854, order: '604 | 250 ', actions: ''}
        ],
        riders: [                
          { name: 'Ikenna Ugochukwu', delivered: 230, pending: 0, totalAmount: '113,380', actions: ''},
          { name: 'Kingsley Effiong', delivered: 159, pending: 140, totalAmount: '100,340', actions: ''},
          { name: 'Bassey Edet', delivered: 300, pending: 198, totalAmount: '74000', actions: ''},
          { name: 'Abu Salami', delivered: 32, pending: 13, totalAmount: '60400', actions: ''}
        ],
        requests: [                
          { name: 'AC Repair', by: 'Manager', status: 'Approved', amount: '13,000', actions: ''},
          { name: 'Petorl for the month', by: 'CSA', status: 'Pending', amount: '160,000', actions: ''},
          { name: 'CWay for the month', by: 'CSA', status: 'Pending', amount: '20,000 ', actions: ''},
          { name: 'Airtime for the month', by: 'Manager', status: 'Pending', amount: '50,000', actions: ''}
        ],
        transactions: [                
          { merchant: 'Unilever', delivered: 230, pending: 0, totalAmount: '223,800', actions: ''},
          { merchant: 'Jumia', delivered: 159, pending: 140, totalAmount: '400,000', actions: ''},
          { merchant: 'Ebano Supermarket', delivered: 300, pending: 198, totalAmount: '39,000 ', actions: ''},
          { merchant: 'Konga', delivered: 32, pending: 13, totalAmount: '20,400', actions: ''}
        ]
      } 
   ]

   @Input() Action: boolean = false
   @Input() ViewAction: boolean = false
   @Input() TableType: string = ''
   
   constructor(private store: Store<AppState>){}

   ngOnInit(): void {
      this.store.select(isAuthenticated).subscribe((data) => {
        // console.log(data.auth.user)
      })
      
   }

}
