
import { EnvironmentInjector, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { Router } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
// import { MerchantsComponent } from './merchants/merchants.component';
// import { NotificationsComponent } from '../components/notifications/notifications.component';
// import { PlacardComponent } from '../components/placard/placard.component';
// import { PulsateComponent } from '../components/pulsate/pulsate.component';
// import { SearchComponent } from '../components/search/search.component';
import { OverviewComponent } from './overview/overview.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { PackagesComponent } from './packages/packages.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountComponent } from './account/account.component';
import { StaffsComponent } from './staffs/staffs.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ManagementComponent } from './management/management.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SettingsComponent } from './settings/settings.component';
import { RidersComponent } from './riders/riders.component';

const routes: Routes = [
    { 
        path:   '', component: ModulesComponent, 
        children: [ 
          {
              'path': 'overview', component: OverviewComponent
          },
          {
              'path': 'merchants', component: MerchantsComponent
          },
          {
              'path': 'customers', component: CustomerComponent
          },
          {
              'path': 'orders', component: PackagesComponent
          },
          {
              'path': 'shelves', component: ShelvesComponent
          },
          {
              'path': 'riders', component: RidersComponent
          },
          {
              'path': 'reports', component: ReportsComponent
          },
          {
              'path': 'account', component: AccountComponent
          },
          {
              'path': 'staffs', component: StaffsComponent
          },
          {
              'path': 'transactions', component: TransactionsComponent
          },
          {
              'path': 'management', component: ManagementComponent
          },
          {
              'path': 'inventory', component: InventoryComponent
          },
          {
              'path': 'settings', component: SettingsComponent
          },
       ] 
    }
];


 
@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})

export class ModuleRoutingModule { }
export const ModuleRoutingComponent = [ ];
