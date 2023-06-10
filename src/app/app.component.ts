import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp2';
  sendData = 'This is data from perant'
  getDataFromChils = ''
  redData(data:any){
    this.getDataFromChils = data
  }
}
