
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
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
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { NotificationsComponent } from './notifications/notifications.component';

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
              'path': 'deliveries', component: DeliveriesComponent
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
          {
              'path': 'notifications', component: NotificationsComponent
          }
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
