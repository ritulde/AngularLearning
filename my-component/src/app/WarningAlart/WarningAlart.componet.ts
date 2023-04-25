import { Attribute } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  //Attribute as a selector
 // selector:'[warning]',

 //class as a selector
//  selector:'.warning',

  selector:'warning-alart',
  //external html
  templateUrl:'./WarningAlart.component.html',

  // internal html
  // template:`<h2>{{titel}}</h2>`,

  //external css
 // styleUrls:['./WarningAlart.component.css']


 //internal css
  styles:[`h3{
    color:red
  }`]
})
export class WarningAlart{
  titel='Create compont without CLI for warning component'
}
