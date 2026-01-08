import { Component, Input, ViewChild } from '@angular/core';
import { TabWrapperDirective } from 'src/app/directives/tab-wrapper.directive';
import { DynamicTab } from 'src/app/service/types/dynamic.tab';


@Component({
  selector: 'app-dynamic-tab-wrapper',
  templateUrl: './dynamic-tab-wrapper.component.html',
  styleUrls: ['./dynamic-tab-wrapper.component.css']
})
export class DynamicTabWrapperComponent {

    activeTab:number = -1
    setActive = (currentTab: number) => 
    {
        this.activeTab = currentTab
    }

     @Input() dynamicComponents: DynamicTab[] = []
     @ViewChild(TabWrapperDirective) tabWrapper!: TabWrapperDirective

     loadComponent(item: DynamicTab, currentTab: number)
     {
        const viewContainerRef = this.tabWrapper?.viewContainerRef
        viewContainerRef?.clear()

        console.log(this.activeTab)
        
        const componentRef = viewContainerRef?.createComponent<DynamicTab>(
          item.component
        )
        componentRef.instance.data = item.data
        this.activeTab = currentTab
     }

}
