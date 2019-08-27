import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    TopbarComponent
  ]
})
export class SharedModule { }
