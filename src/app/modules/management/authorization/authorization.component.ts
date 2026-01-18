import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent 
{
    pageTitle:string = 'User Management'
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
      { id: 1, name:'Resource' },
      { id: 2, name:'Pages' },
      { id: 3, name:'Actions' }
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