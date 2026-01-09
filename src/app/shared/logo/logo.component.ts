import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

    height: number = 150
    width: number = 150
    alt: string = 'logo'
    image: string = '../../../assets/logistics.png'   //'../../../assets/ebby-express-logo.jpg';  //

    constructor(private router: Router){}

    redirect = () => 
    {
      this.router.navigate(['/overview'])
    }

}
