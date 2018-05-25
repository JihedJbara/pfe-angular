import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';


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
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



