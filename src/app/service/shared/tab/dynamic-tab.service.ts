import { Injectable } from '@angular/core';
import { DynamicTab } from '../../types/dynamic.tab'
import { AdministrationComponent } from 'src/app/modules/management/privilege/administration/administration.component';
import { ManagemantComponent } from 'src/app/modules/management/privilege/managemant/managemant.component';
import { OverviewsComponent } from 'src/app/modules/management/privilege/overviews/overviews.component';
import { StaffsComponent } from 'src/app/modules/management/privilege/staffs/staffs.component';
import { OrdersSettingsComponent } from 'src/app/modules/settings/orders-settings/orders-settings.component';
import { ShelveSettingsComponentComponent } from 'src/app/modules/settings/shelve-settings-component/shelve-settings-component.component';


@Injectable({
  providedIn: 'root'
})
export class DynamicTabService {

    constructor() { }

    getDynamicComponents()
    {
       const components: any = [
          new DynamicTab(OverviewsComponent, { name: 'overviews' }),
          new DynamicTab(ManagemantComponent, { name: 'Management' }),
          new DynamicTab(AdministrationComponent, { name: 'administration' }),
          new DynamicTab(StaffsComponent, { name: 'Staffs' }),
       ]
       return components
    }

    getSettingsDynamicComponents()
    {
       const components: any = [
          new DynamicTab(OrdersSettingsComponent, { name: 'Orders' }),
          new DynamicTab(ShelveSettingsComponentComponent, { name: 'Shelves' }),
       ]
       return components
    }

}
