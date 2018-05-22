import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
  { path: 'auth', loadChildren:'app/auth/auth.module#AuthModule' },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'user', component:UserComponent },
  { path: 'admin', component:AdminComponent },
  { path: '', redirectTo:'dashboard', pathMatch:'full' },
  { path: '**', redirectTo:'dashboard' },
];

const config:ExtraOptions = {
  useHash: true ,
}

@NgModule({
  imports: [ RouterModule.forRoot(routes,config) ],
  exports: [ RouterModule]
})

export class AppRoutingModule { }
