import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

    height: number = 75
    width: number = 75
    alt: string = 'logo'
    image: string = '../../../assets/RachamHub Logistics.png'   //'../../../assets/ebby-express-logo.jpg';  //

    constructor(private router: Router){}

    redirect = () => 
    {
      this.router.navigate(['/overview'])
    }

}
