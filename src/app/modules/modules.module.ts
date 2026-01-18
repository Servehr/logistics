import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { ModuleRoutingModule, ModuleRoutingComponent } from './modules-routing.module';
import { ModulesComponent } from './modules/modules.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PlacardComponent } from '../components/placard/placard.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { OverviewComponent } from './overview/overview.component';
import { PulsateComponent } from '../components/pulsate/pulsate.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { InputBoxComponent } from '../components/controls/input-box/input-box.component';
import { SearchComponent } from '../components/search/search.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { NewMerchantComponent } from './merchants/new-merchant/new-merchant.component';
import { ActionOnMerchantComponent } from './merchants/action-on-merchant/action-on-merchant.component';
import { ViewMerchantComponent } from './merchants/view-merchant/view-merchant.component';
import { UpdateMerchantComponent } from './merchants/update-merchant/update-merchant.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { PackagesComponent } from './packages/packages.component';
import { AvailabilityComponent } from './packages/availability/availability.component';
import { CancelOrderComponent } from './packages/cancel-order/cancel-order.component';
import { CreatePackageComponent } from './packages/create-package/create-package.component';
import { ViewPackageComponent } from './packages/view-package/view-package.component';
import { UpdatePackageComponent } from './packages/update-package/update-package.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { OrderShelveLocationComponent } from './shelves/order-shelve-location/order-shelve-location.component';
import { PlaceProductOnShelveComponent } from './shelves/place-product-on-shelve/place-product-on-shelve.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewReportComponent } from './reports/view-report/view-report.component';
import { AccountComponent } from './account/account.component';
import { RemoveAccountComponent } from './account/remove-account/remove-account.component';
import { StaffsComponent } from './staffs/staffs.component';
import { ActionOnStaffComponent } from './staffs/action-on-staff/action-on-staff.component';
import { AddStaffComponent } from './staffs/add-staff/add-staff.component';
import { UpdateStaffComponent } from './staffs/update-staff/update-staff.component';
import { ViewStaffComponent } from './staffs/view-staff/view-staff.component';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ManagementComponent } from './management/management.component';
import { ActionsComponent } from './management/actions/actions.component';
import { NewStockComponent } from './inventory/new-stock/new-stock.component';
import { UpdateStockComponent } from './inventory/update-stock/update-stock.component';
import { ReStockComponent } from './inventory/re-stock/re-stock.component';
import { StockHistoryComponent } from './inventory/stock-history/stock-history.component';
import { RemoveStockComponent } from './inventory/remove-stock/remove-stock.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingControlComponent } from './settings/setting-control/setting-control.component';
import { RidersComponent } from './riders/riders.component';
import { ActionOnRiderComponent } from './riders/action-on-rider/action-on-rider.component';
import { NewRiderComponent } from './riders/new-rider/new-rider.component';
import { RemoveRiderComponent } from './riders/remove-rider/remove-rider.component';
import { RiderDetailsComponent } from './riders/rider-details/rider-details.component';
import { UpdateRiderComponent } from './riders/update-rider/update-rider.component';
import { OpenOrdersComponent } from './packages/open-orders/open-orders.component';
import { PendingOrdersComponent } from './packages/pending-orders/pending-orders.component';
import { ReturnedOrdersComponent } from './packages/returned-orders/returned-orders.component';
import { GeneralReportComponent } from './reports/general-report/general-report.component';
import { SalesReportComponent } from './reports/sales-report/sales-report.component';
import { RankingReportComponent } from './reports/ranking-report/ranking-report.component';
import { StockApprovalComponent } from './inventory/stock-approval/stock-approval.component';
import { InventoryStockApprovalComponent } from './inventory/inventory-stock-approval/inventory-stock-approval.component';
import { CategoriesComponent } from './management/categories/categories.component';
import { DepartmentsComponent } from './management/departments/departments.component';
import { RolesComponent } from './management/roles/roles.component';
import { AuthorizationComponent } from './management/authorization/authorization.component';
import { ActionComponent } from './management/authorization/action/action.component';
import { RexourceComponent } from './management/authorization/rexource/rexource.component';
import { PageComponent } from './management/authorization/page/page.component';
import { NewCategoryComponent } from './management/categories/new-category/new-category.component';
import { RemoveCategoryComponent } from './management/categories/remove-category/remove-category.component';
import { UpdateCategoryComponent } from './management/categories/update-category/update-category.component';
import { NewDepartmentComponent } from './management/departments/new-department/new-department.component';
import { UpdateDepartmentComponent } from './management/departments/update-department/update-department.component';
import { RemoveDepartmentComponent } from './management/departments/remove-department/remove-department.component';
import { RemoveRoleComponent } from './management/roles/remove-role/remove-role.component';
import { NewRoleComponent } from './management/roles/new-role/new-role.component';
import { UpdateRoleComponent } from './management/roles/update-role/update-role.component';

import { UpdateActionComponent } from './management/authorization/page/update-action/update-action.component';
import { RemoveActionComponent } from './management/authorization/page/remove-action/remove-action.component';
import { LinkUnlinkActionComponent } from './management/authorization/action/link-unlink-action/link-unlink-action.component';
import { RemoveRexourceComponent } from './management/authorization/rexource/remove-rexource/remove-rexource.component';
import { NewRexourceComponent } from './management/authorization/rexource/new-rexource/new-rexource.component';
import { UpdateRexourceComponent } from './management/authorization/rexource/update-rexource/update-rexource.component';

import { AddActionToPageComponent } from './management/authorization/page/add-action-to-page/add-action-to-page.component';
import { UpdatePageComponent } from './management/authorization/page/update-page/update-page.component';
import { RemovePageComponent } from './management/authorization/page/remove-page/remove-page.component';
import { ConnectPageToRexourceComponent } from './management/authorization/page/connect-page-to-rexource/connect-page-to-rexource.component';
import { DisconnectPageFromRexourceComponent } from './management/authorization/page/disconnect-page-from-rexource/disconnect-page-from-rexource.component';
import { PageActionsComponent } from './management/authorization/page/page-actions/page-actions.component';
import { StockComponent } from './inventory/stock/stock.component';


@NgModule({
  declarations: [      
    OverviewComponent,
    MerchantsComponent,
    NewMerchantComponent,
    ActionOnMerchantComponent,
    ViewMerchantComponent,
    UpdateMerchantComponent,
    CustomerComponent,

    ReportsComponent,
    ViewReportComponent,
    GeneralReportComponent,
    SalesReportComponent,
    RankingReportComponent,

    AccountComponent,
    ViewReportComponent,
    RemoveAccountComponent,

    StaffsComponent,
    ActionOnStaffComponent,
    AddStaffComponent,
    UpdateStaffComponent,
    ViewStaffComponent,

    TransactionsComponent,

    TabsComponent,

    PackagesComponent,
    OpenOrdersComponent,
    PendingOrdersComponent,
    ReturnedOrdersComponent,

    AvailabilityComponent,
    CancelOrderComponent,
    CreatePackageComponent,
    ViewPackageComponent,
    UpdatePackageComponent,

    NewAccountComponent,
    StockApprovalComponent,
    InventoryStockApprovalComponent,
    RemoveAccountComponent,

    ShelvesComponent,
    OrderShelveLocationComponent,
    PlaceProductOnShelveComponent,

    ManagementComponent,
    RexourceComponent,
    PageComponent,
    ActionsComponent,

    CategoriesComponent,
    NewCategoryComponent,

    DepartmentsComponent,
    RolesComponent,
    AuthorizationComponent,

    InventoryComponent,
    StockComponent,
    NewStockComponent,
    UpdateStockComponent,
    ReStockComponent,
    StockHistoryComponent,
    RemoveStockComponent,
    
    SettingsComponent,
    SettingControlComponent,

    RidersComponent,
    ActionOnRiderComponent,
    NewRiderComponent,
    RemoveRiderComponent,
    RiderDetailsComponent,
    RiderDetailsComponent,
    UpdateRiderComponent,

    SearchComponent,
    PaginationComponent,
    InputBoxComponent,
    ModulesComponent,
    PulsateComponent,
    SidebarComponent,
    HeaderComponent,
    PlacardComponent,
    NotificationsComponent,
    
    FooterComponent,
    AuthorizationComponent,
    ActionComponent,
    ActionComponent,
    RexourceComponent,
    PageComponent,
    RemoveCategoryComponent,
    UpdateCategoryComponent,
    NewDepartmentComponent,
    UpdateDepartmentComponent,
    RemoveDepartmentComponent,
    RemoveRoleComponent,
    NewRoleComponent,
    UpdateRoleComponent,
    UpdateActionComponent,
    RemoveActionComponent,
    LinkUnlinkActionComponent,
    RemoveRexourceComponent,
    NewRexourceComponent,
    UpdateRexourceComponent,
    
    AddActionToPageComponent,
    UpdatePageComponent,
    RemovePageComponent,
    ConnectPageToRexourceComponent,
    DisconnectPageFromRexourceComponent,
    PageActionsComponent,
    StockComponent
  ],
  imports: [
    ModuleRoutingModule,
    SharedModule    
  ],
  // exports: [
  //     // TableComponent
  //   // InputFieldComponent,
  //   // ModulesComponent,
  //   // SharedModule  
  // ]
})
export class ModulesModule { }
