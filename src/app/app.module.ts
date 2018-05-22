import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LOCALE_ID} from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



