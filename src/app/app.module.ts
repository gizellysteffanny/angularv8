import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AccessControlModule } from './modules/access-control/access-control.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
