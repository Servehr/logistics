import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AllUser } from 'src/app/state/actions/user.actions';
import AppState from 'src/app/state/app.state';
import { getPageLinks } from 'src/app/state/selector/paginate.selector';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit { 
    
    @Input() beforeCurrent: number = 3
    @Input() afterCurrent: number = 3 
    @Input() currentPage: number = 1
    @Input() hasNextPage:boolean = true
    @Input() hasPreviousPage:boolean = true
    @Input() perPage: number = 3
    @Input() totalPage: number = 8
    @Input() id: string = ""
    @Input() noOfPages: number = 3
    loading: boolean = true

    increase: number[] = []
    decrease: number[] = []
    linksBeforeAndAfter: number = 2

    showLinksBeforeCurrent: number[] = []
    showLinksAfterCurrent: number[] = []

    constructor(private store: Store<AppState>)
    { 
        for(let index = 1; index <= this.linksBeforeAndAfter; index++) 
        {
          if((this.currentPage-index) >= 1)
          {
            this.decrease.push(this.currentPage-index) 
          }
        }
        
        for (let index = 1; index <= this.linksBeforeAndAfter; index++) 
        {
            let no = (this.currentPage+index) 
            if(no > this.currentPage)
            {
              this.increase.push(no) 
            }
        }
        this.linksBefore()
        this.linksAfter()
    }

    ngOnInit(): void 
    {
       this.store.select(getPageLinks).subscribe((data: any) => 
       {
            if(data?.loading)
            {
                this.currentPage =  data.current_page
                this.hasNextPage = data.has_next_page
                this.hasPreviousPage = data.has_previous_page
                this.noOfPages = data.no_of_pages
                this.totalPage = data.total_page
                this.loading = data.loading
                //  this.linksBefore()
            }
       })
    }

    previousPage = () => 
    {
       this.store.dispatch(AllUser({ currentPage: this.currentPage-1, perPage: this.perPage, allPages: 0 }))
    }

    nextPage = () => 
    { 
       const current = Number(this.currentPage)
       this.store.dispatch(AllUser({ currentPage: current+1, perPage: this.perPage, allPages: 0 }))  
    }

    linksBefore = () => 
    {
        const sorting: number[] = this.decrease.reverse()
        sorting.map((num: number, index: number) => 
        {
            if(num >= 1 && num < this.currentPage)
            {
              this.showLinksBeforeCurrent.push(num)
            }
        })
    }

    linksAfter = () => 
    {        
        this.increase.map((num: number, index: number) => 
        {
            if(num > this.currentPage && num <= this.noOfPages)
            {
              this.showLinksAfterCurrent.push(num)
            }
        })
    }

    
    fetchRows = (page: number, where: string) => 
    {
        if(where === 'previous')
        {
          this.currentPage = page
          this.showLinksBeforeCurrent = []
          this.decrease = []
          for (let index = 1; index <= this.linksBeforeAndAfter; index++) 
          {
              let no = (this.currentPage-index) 
              if(no > this.currentPage)
              {
                this.decrease.push(no) 
              }
          }
        }
        if(where === 'next')
        {
          this.currentPage = page
          this.showLinksAfterCurrent = []
          this.increase = []
          for (let index = 1; index <= this.linksBeforeAndAfter; index++) 
          {
              let no = (this.currentPage+index) 
              if(no > this.currentPage)
              {
                this.increase.push(no) 
              }
          }
          this.linksAfter()
        }
        switch (this.id) {
          case 'users':
            this.store.dispatch(AllUser({ currentPage: page, perPage: this.perPage, allPages: 0 }))            
            break;        
          default:
            break;
        }
    }

}
