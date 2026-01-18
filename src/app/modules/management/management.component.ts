import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {

    title: string = 'System Management'

    TabPages: string[] = ["Location", "Categories", "Department", "Role", "Resources", "Actions"]
    page: number = 0

    @Input() fieldId: string = 'search-merchant'

    setPage(page: any)
    {
       this.page = page
    }

}
