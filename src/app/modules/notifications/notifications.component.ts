import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

    title: string = 'Notifications'
    
    notifications:any[] = [
      { message: 'Rider Michael picked up from the shelve', date: '03:29pm - 11-10-2006' },
      { message: 'New order has been placed on shelf', date: '01:29pm - 10-10-2006' },
    ]


}