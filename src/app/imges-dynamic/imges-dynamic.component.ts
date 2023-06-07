import { Component } from '@angular/core';

@Component({
  selector: 'app-imges-dynamic',
  templateUrl: './imges-dynamic.component.html',
  styleUrls: ['./imges-dynamic.component.css']
})
export class ImgesDynamicComponent {
  url = "assets/img1.png"
  allImages = [
    {img,'assets/img2.png'},
    {img,'assets/img2.png'},
    {img,'assets/images.png'},
  ]
  constructor(){}
  changeImg(){
    this.url = "assets/images.png"
  }
}
