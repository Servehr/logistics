import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent 
{
    pageTitle:string = 'User Management'
    activeTabIndex: number = 0
    level: string = 'Management'

    role: number = -1
    roles:any[] = [
      { id: 'admin', name:'Admin' },
      { id: 'manager', name:'Manager' },
      { id: 'secretary', name:'Secretary' }
    ] 
    resource: {  id: number, name: string } = { id: -1, name: "" }
    resources:any[] = [
      { id: 1, name:'Merchant' },
      { id: 2, name:'Staff' },
      { id: 3, name:'Transactions' }
    ] 

    roleForm: FormGroup;    

    constructor()
    {
        this.roleForm = new FormGroup(
        {
          role: new FormControl('', [Validators.required])
        }) 
    }

    // components = this.dynamicTabService.getSettingsDynamicComponents()
    
    ControlPage(resource: { id: number, name: string })
    {
      this.role = 3
      this.resource = resource
    }

}
