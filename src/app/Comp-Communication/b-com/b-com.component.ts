import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b-com',
  templateUrl: './b-com.component.html',
  styleUrls: ['./b-com.component.css']
})
export class BComComponent {
  @Input() getData:any;
  
  @Output() newItemEvent = new EventEmitter();
  constructor(){
    this.newItemEvent.emit('This is child')
  }
}
