import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/service/shared/modal/modal.service';

@Component({
  selector: 'app-ranking-report',
  templateUrl: './ranking-report.component.html',
  styleUrls: ['./ranking-report.component.css']
})
export class RankingReportComponent 
{
    title: string = 'Product Ranking - Merchants'
                    
    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'
     
    constructor(public modalService: ModalService){}

}
