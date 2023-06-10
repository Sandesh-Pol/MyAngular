import { Component, Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 
  @Input() giveMeData:any;
  @Output() newItemEvent = new EventEmitter();
  constructor(){}
  sendDataMeathos(){
    this.newItemEvent.emit('This is child')
  }
}
