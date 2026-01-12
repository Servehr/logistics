import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { OverviewComponent } from './modules/overview/overview.component';
// import { RidersComponent } from './modules/riders/riders.component';
// import { PlacardComponent } from './components/placard/placard.component';
// import { SearchComponent } from './components/search/search.component';
// import { NotificationsComponent } from './components/notifications/notifications.component';
// import { PulsateComponent } from './components/pulsate/pulsate.component';
// import { MerchantsComponent } from './modules/merchants/merchants.component';
// import { ReportsComponent } from './modules/reports/reports.component';
// import { MailsComponent } from './modules/mails/mails.component';
// import { RequestsComponent } from './modules/requests/requests.component';
// import { ExpensesComponent } from './modules/expenses/expenses.component';
// import { SettingsComponent } from './modules/settings/settings.component';
// import { ShelvesComponent } from './modules/shelves/shelves.component';
// import { TransactionsComponent } from './modules/transactions/transactions.component';
// import { StaffsComponent } from './modules/staffs/staffs.component';
// import { PackagesComponent } from './modules/packages/packages.component';
// import { InventoryComponent } from './modules/inventory/inventory.component';
// import { SalesReportComponent } from './modules/reports/sales-report/sales-report.component';
// import { RankingReportComponent } from './modules/reports/ranking-report/ranking-report.component';
// import { PendingOrdersComponent } from './modules/packages/pending-orders/pending-orders.component';
// import { ReturnedOrdersComponent } from './modules/packages/returned-orders/returned-orders.component';
// import { AccountComponent } from './modules/account/account.component';
// import { OpenOrdersComponent } from './modules/packages/open-orders/open-orders.component';
// import { GeneralReportComponent } from './modules/reports/general-report/general-report.component';
// import { DepartmentsComponent } from './modules/management/departments/departments.component';
// import { LocationsComponent } from './modules/management/locations/locations.component';
// import { CategoriesComponent } from './modules/management/categories/categories.component';
// import { RolesComponent } from './modules/management/roles/roles.component';
// import { PrivilegeComponent } from './modules/management/privilege/privilege.component';
// import { StockApprovalComponent } from './modules/inventory/stock-approval/stock-approval.component';
import { AuthGuard } from './guard/auth.guard';
// import { OrdersSettingsComponent } from './modules/settings/orders-settings/orders-settings.component';
// import { OverviewsComponent } from './modules/management/privilege/overviews/overviews.component';
// import { AdministrationComponent } from './modules/management/privilege/administration/administration.component';
// import { ActionsComponent } from './modules/management/actions/actions.component';
// import { CustomerComponent } from './modules/customers/customer/customer.component';
// import { NewStockComponent } from './modules/inventory/new-stock/new-stock.component';
// import { ManagementComponent } from './modules/management/management.component';

const routes: Routes = [
  
    // { path:   'sidebar',   component:   SidebarComponent },
    // { path:   'header',   component:   HeaderComponent },
    // { path:   'footer',   component:   FooterComponent },
    // { path:   'overview',   component:   OverviewComponent }

];
 
@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponent = [ ];