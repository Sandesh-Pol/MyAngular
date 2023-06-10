import { Component } from '@angular/core';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent {
  
  parentVariable = 'I am Parent';
  txtdataFromChild:any;
  constructor(){}

  redData(data:any){
    this.txtdataFromChild = data
    console.log(data,'logdata')
  }
}
