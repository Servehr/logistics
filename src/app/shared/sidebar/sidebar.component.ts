import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  pages: { name: string, route: string, icon: any, hasSubMenu: boolean, subMenu?: { name: string, route: string, icon: any }[]  }[] = [
      { name: "Overview", route: '/overview', icon: "", hasSubMenu: false  },
      { name: "Merchants", route: '/merchants', icon: "", hasSubMenu: false  },
      { name: "Customers", route: '/customers', icon: "", hasSubMenu: false  },
      { name: "Orders", route: '/orders', icon: "", hasSubMenu: false  },
      // {
      //   name: "Orders",
      //   route: '/orders',
      //   icon: "",
      //   hasSubMenu: true,
      //   subMenu: [
      //               {  name: "All", route: '/orders', icon: "" },
      //               {  name: "Open", route: '/open', icon: "" },
      //               {  name: "Pending", route: '/pending', icon: "" },
      //               {  name: "Returned", route: '/returned', icon: "" }
      //            ]
      // },
      { name: "Shelves", route: '/shelves', icon: "", hasSubMenu: false  },
      { name: "Riders", route: '/riders', icon: "", hasSubMenu: false  },
      { name: "Reports", route: '/reports', icon: "", hasSubMenu: false  },
      // {
      //   name: "Reports",
      //   route: '/reports',
      //   icon: "",
      //   hasSubMenu: true,
      //   subMenu: [
      //               {  name: "General Report", route: '/general-report', icon: "" },
      //               {  name: "Sales Analysis", route: '/sales-analysis', icon: "" },
      //               {  name: "Product Ranking", route: '/product-ranking', icon: "" }
      //            ]
      // },
      { name: "Account", route: '/account', icon: "", hasSubMenu: false },
      { name: "Staffs", route: '/staffs', icon: "", hasSubMenu: false  },
      { name: "Transaction", route: '/transactions', icon: "", hasSubMenu: false },
      // { name: "Requests", route: '/requests', icon: "", hasSubMenu: false },
      // { name: "Expenes", route: '/expenses', icon: "", hasSubMenu: false  },
      { name: "Management", route: '/management', icon: "", hasSubMenu: false },
      // {
      //   name: "Management",
      //   route: '/management',
      //   icon: "",
      //   hasSubMenu: true,
      //   subMenu: [
      //               {  name: "Department", route: '/departments', icon: "" },
      //               // {  name: "Location", route: '/locations', icon: "" },
      //               {  name: "Categories", route: '/categories', icon: "" },
      //               {  name: "Roles", route: '/roles', icon: "" },
      //               {  name: "Resources", route: '/privileges', icon: "" },
      //               {  name: "Actions", route: '/actions', icon: "" },
      //            ]
      // },
      { name: "Inventory", route: '/inventory', icon: "", hasSubMenu: false },
      // {
      //   name: "Inventory",
      //   route: '/inventory',
      //   icon: "",
      //   hasSubMenu: true,
      //   subMenu: [
      //               {  name: "stock", route: '/stock', icon: "" },
      //               {  name: "Approvals", route: '/stock-approval', icon: "" }
      //            ]
      // },
      { name: "Settings", route: '/settings', icon: "", hasSubMenu: false  },
  ]

  sideBarSubMenu: HTMLCollection | undefined

  constructor(private router: Router){}

  ngOninit()
  {
  }

  ngAfterViewInit()
  {   
    let navbar: HTMLCollection = document.getElementById('aside')?.children as HTMLCollection 
    Array.from(navbar).forEach((item: any, index: number) => {
        let ulTag: any = item?.childNodes[1]
        ulTag.classList.add('hidden')
        item.addEventListener('click', (x: any) => 
        {
            if(ulTag)
            {
                // console.log(ulTag)
                // console.log(ulTag?.childNodes)
               if(ulTag.classList.contains('hidden'))
               {
                  ulTag.classList.add('indicate')
                  ulTag.classList.remove('hidden')   
                  ulTag.classList.remove('active-link')              
               } else {                
                  ulTag.classList.add('hidden')
                  ulTag.classList.add('indicate')
                  ulTag.classList.remove('active-link')   
               }
            }
        })
    })
  }

  overview = () =>
  {
      this.router.navigate(['/overview'])
  }

}
