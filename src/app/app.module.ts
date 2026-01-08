import { EnvironmentInjector, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoLayoutComponent } from './layouts/no-layout/no-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SelectComponent } from './components/controls/select/select.component';
import { DialogComponent } from './components/dialog/dialog.component';
// import { PackagesComponent } from './modules/packages/packages.component';
import { InputBoxComponent } from './components/controls/input-box/input-box.component';
import { TableComponent } from './components/controls/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CheckBoxComponent } from './components/controls/check-box/check-box.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TabWrapperDirective } from './directives/tab-wrapper.directive';

import { OrdersSettingsComponent } from './modules/settings/orders-settings/orders-settings.component';

import { DynamicTabWrapperComponent } from './modules/management/privilege/tab-wrappber/dynamic-tab-wrapper/dynamic-tab-wrapper.component';
import { OverviewsComponent } from './modules/management/privilege/overviews/overviews.component';
import { StaffsComponent } from './modules/management/privilege/staffs/staffs.component';
import { MerchantsComponent } from './modules/management/privilege/merchants/merchants.component';
import { RidersComponent } from './modules/management/privilege/riders/riders.component';
import { OrdersComponent } from './modules/management/privilege/orders/orders.component';
import { ShelvesComponent } from './modules/management/privilege/shelves/shelves.component';
import { ConversationsComponent } from './modules/management/privilege/conversations/conversations.component';
import { ReportsComponent } from './modules/management/privilege/reports/reports.component';
import { ExpensesComponent } from './modules/management/privilege/expenses/expenses.component';
import { RequestsComponent } from './modules/management/privilege/requests/requests.component';
import { ManagemantComponent } from './modules/management/privilege/managemant/managemant.component';
import { AdministrationComponent } from './modules/management/privilege/administration/administration.component';
import { TransactionsComponent } from './modules/management/privilege/transactions/transactions.component';

import { AvailabilityComponent } from './modules/packages/availability/availability.component';
import { CancelOrderComponent } from './modules/packages/cancel-order/cancel-order.component';
import { CreatePackageComponent } from './modules/packages/create-package/create-package.component';

import { LabelComponent } from './components/controls/label/label.component';
import { TextAreaComponent } from './components/controls/text-area/text-area.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './state/effects/auth.effects';
import { UserEffect } from './state/effects/user.effects';
import { AuthTokenInterceptor } from './interceptor/AuthToken.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './state/router/custom.serializer';
import { ProductEffect } from './state/effects/product.effects';
import { FirstTimerComponent } from './auth/first-timer/first-timer.component';
import { DepartmentsComponent } from './modules/management/departments/departments.component';
import { LocationsComponent } from './modules/management/locations/locations.component';
import { CategoriesComponent } from './modules/management/categories/categories.component';
import { RolesComponent } from './modules/management/roles/roles.component';
import { PrivilegeComponent } from './modules/management/privilege/privilege.component';
import { StockApprovalComponent } from './modules/inventory/stock-approval/stock-approval.component';
import { NewStockComponent } from './modules/inventory/new-stock/new-stock.component';
import { ActionsComponent } from './modules/management/actions/actions.component';
import { ShelveSettingsComponentComponent } from './modules/settings/shelve-settings-component/shelve-settings-component.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared.module';
import { ViewStaffComponent } from './modules/staffs/view-staff/view-staff.component';
import { HeaderComponent } from './components/dialog/header/header.component';
import { ViewPackageComponent } from './modules/packages/view-package/view-package.component';
import { UpdatePackageComponent } from './modules/packages/update-package/update-package.component';
import { OrderShelveLocationComponent } from './modules/shelves/order-shelve-location/order-shelve-location.component';
import { PlaceProductOnShelveComponent } from './modules/shelves/place-product-on-shelve/place-product-on-shelve.component';
import { NewRiderComponent } from './modules/riders/new-rider/new-rider.component';
import { UpdateRiderComponent } from './modules/riders/update-rider/update-rider.component';
import { RemoveRiderComponent } from './modules/riders/remove-rider/remove-rider.component';
import { RiderDetailsComponent } from './modules/riders/rider-details/rider-details.component';
import { ActionOnRiderComponent } from './modules/riders/action-on-rider/action-on-rider.component';
import { ImagePictureComponent } from './components/controls/image-picture/image-picture.component';
import { ViewReportComponent } from './modules/reports/view-report/view-report.component';
import { AddStaffComponent } from './modules/staffs/add-staff/add-staff.component';
import { ActionOnStaffComponent } from './modules/staffs/action-on-staff/action-on-staff.component';
import { UpdateStaffComponent } from './modules/staffs/update-staff/update-staff.component';
import { NewMerchantComponent } from './modules/merchants/new-merchant/new-merchant.component';
import { ActionOnMerchantComponent } from './modules/merchants/action-on-merchant/action-on-merchant.component';
import { ViewMerchantComponent } from './modules/merchants/view-merchant/view-merchant.component';
import { UpdateMerchantComponent } from './modules/merchants/update-merchant/update-merchant.component';
import { CustomerComponent } from './modules/customers/customer/customer.component';
import { RemoveAccountComponent } from './modules/account/remove-account/remove-account.component';
import { NewAccountComponent } from './modules/account/new-account/new-account.component';
import { UpdateStockComponent } from './modules/inventory/update-stock/update-stock.component';
import { ReStockComponent } from './modules/inventory/re-stock/re-stock.component';
import { StockHistoryComponent } from './modules/inventory/stock-history/stock-history.component';
import { RemoveStockComponent } from './modules/inventory/remove-stock/remove-stock.component';
import { SettingControlComponent } from './modules/settings/setting-control/setting-control.component';
import { ManagementComponent } from './modules/management/management.component';


const routex: Routes = [
    { path:   '',   component:   LoginComponent },
    { path:   'login',   component:   LoginComponent },
    { path:   'reset',   component:   ResetComponent },
    { path:   'forgot',   component:   ForgotComponent },
    { path:   'new-password',   component:   ForgotComponent },
    { path:   'first-timer',   component:   FirstTimerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    ForgotComponent,
    RoutingComponent,
    NoLayoutComponent,
    MainLayoutComponent,
    SelectComponent,
    ImagePictureComponent,
    DialogComponent,
    InputBoxComponent,
    TableComponent,
    CheckBoxComponent,
    PaginationComponent,
    TabsComponent,
    SwitchComponent,
    DynamicTabWrapperComponent,
    TabWrapperDirective,

    OverviewsComponent,
    StaffsComponent,
    MerchantsComponent,
    RidersComponent,
    OrdersComponent,
    ShelvesComponent,
    ConversationsComponent,
    ReportsComponent,
    ExpensesComponent,
    RequestsComponent,
    ManagemantComponent,
    AdministrationComponent,
    TransactionsComponent,
    OverviewsComponent,
    ViewReportComponent,
    AddStaffComponent,
    ViewStaffComponent,
    ActionOnStaffComponent,
    UpdateStaffComponent,
    NewMerchantComponent,
    ActionOnMerchantComponent,
    ViewMerchantComponent,
    UpdateMerchantComponent,
    CustomerComponent,
    RemoveAccountComponent,
    NewAccountComponent,
    SettingControlComponent,
    ManagementComponent,

    AvailabilityComponent,
    CancelOrderComponent,
    CreatePackageComponent,
    ViewPackageComponent,
    UpdatePackageComponent,
    OrderShelveLocationComponent,
    PlaceProductOnShelveComponent,
    NewRiderComponent,
    UpdateRiderComponent,
    RemoveRiderComponent,
    RiderDetailsComponent,
    ActionOnRiderComponent,

    DepartmentsComponent,
    LocationsComponent,
    CategoriesComponent,
    RolesComponent,
    PrivilegeComponent,

    OrdersSettingsComponent,

    LabelComponent,
    TextAreaComponent,
    FirstTimerComponent,
    NewStockComponent,
    UpdateStockComponent,
    ReStockComponent,
    StockHistoryComponent,
    RemoveStockComponent,
    StockApprovalComponent,
    ActionsComponent,
    ShelveSettingsComponentComponent,
    ViewStaffComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    RouterModule.forRoot(routex),
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
       maxAge: false,
       logOnly: !isDevMode()
    }),
    EffectsModule.forRoot([AuthEffect, UserEffect, ProductEffect]),    
    HttpClientModule,
    StoreRouterConnectingModule.forRoot({
       serializer: CustomSerializer
    })
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
