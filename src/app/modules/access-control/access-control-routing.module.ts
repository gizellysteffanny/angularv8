import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Register1Component } from './register1/register1.component';

const routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'register1', component: Register1Component}
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})

export class AccessControlRoutingModule {}
