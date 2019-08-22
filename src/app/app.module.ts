import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AccessControlModule } from './modules/access-control/access-control.module';
import { MainModule } from './modules/main/main.module';
import { AppComponent } from './app.component';
import { Register1Component } from './access-control/register1/register1.component';

@NgModule({
  declarations: [
    AppComponent,
    Register1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessControlModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
