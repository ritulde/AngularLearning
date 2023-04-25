import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'String-interpolation';
  serverId:number=10;
  serverStatus:string='offline'
  getServerStatus(){
    return this.serverStatus;
  }
}
