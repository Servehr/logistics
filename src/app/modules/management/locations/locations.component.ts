import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent 
{
    pageTitle:string = 'Location'
    page: number = -1
    level: string = 'Management'

    role: number = -1
    roles:any[] = [
      { id: 'admin', name:'Admin' },
      { id: 'manager', name:'Manager' },
      { id: 'secretary', name:'Secretary' }
    ] 
    resource: {  id: number, name: string } = { id: -1, name: "" }
    resources:any[] = [
      { id: 1, name:'Country' },
      { id: 2, name:'States' },
      { id: 3, name:'LGA' }
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
    
    GoToPage(page: number)
    {
      this.page = page
    }

}