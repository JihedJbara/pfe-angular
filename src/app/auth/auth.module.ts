import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from "@angular/forms";
import {LoginComponent, AuthenticationService} from './components/login';
import {RegisterService} from "./components/register/register.service";


@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
  ],

  declarations: [
    RegisterComponent,
    AuthComponent,
    LoginComponent,

  ],
  providers: [
    AuthenticationService,
    RegisterService
  ]
})
export class AuthModule {
}
