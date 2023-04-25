import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propertyBinding';
  alowAddServer:boolean=false;
  constructor(){
    setTimeout(()=>{return this.alowAddServer=true},2000);
  }
}
