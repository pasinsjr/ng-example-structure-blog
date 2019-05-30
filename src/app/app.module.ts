import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component3/component4/component4.component';
import { Component5Component } from './component3/component5/component5.component';
import { Component6Component } from './component3/component6/component6.component';
import { PopupComponent } from './popup/popup.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, Component1Component, Component2Component, Component3Component, Component4Component, Component5Component, Component6Component, PopupComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
