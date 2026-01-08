import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-picture',
  templateUrl: './image-picture.component.html',
  styleUrls: ['./image-picture.component.css']
})
export class ImagePictureComponent {

  @Input() firstname: string = ''

  @Input() surname: string = ''

  @Input() role: string = ''

  @Input() src: string = ''

}
