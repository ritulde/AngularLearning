import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlartComponent } from './success-alart/success-alart.component';
import { WarningAlart } from './WarningAlart/WarningAlart.componet';
import { AnotherComponent } from './AnotherComponent/another.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessAlartComponent,
    WarningAlart,
    AnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
