import { Component } from '@angular/core';

@Component({
  selector: 'app-a-com',
  templateUrl: './a-com.component.html',
  styleUrls: ['./a-com.component.css']
})
export class AComComponent {
  sendDataToChild  = 'Parent Data'
  constructor(){}
  ngOnInit():void{
    
  }
}
