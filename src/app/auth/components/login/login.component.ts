import {Component, OnInit} from '@angular/core';
import {User} from "../../../shared/user";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
import {JwtHelper, tokenNotExpired} from "angular2-jwt";
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService ,   private router: Router) {
  }

  user = new User();
  jwtHelper: JwtHelper = new JwtHelper();

  checkRole(role: string) {
    const token = localStorage.getItem('token');

    const _roles: string[] = new Array<string>();
    if (token) {
      this.jwtHelper.decodeToken(token).roles.map(_role => {
        _roles.push(_role.authority.replace('ROLE_', ''));
      });

      if (_.includes(_roles, role)) { return true; }
    }

    return false;
  }
  login()
  {
    this.authenticationService.login(this.user).subscribe((data) => {
      console.log(data);

      var token = localStorage.getItem('token');
      var role = this.jwtHelper.decodeToken(token).roles;
      console.log(role);



     if(this.checkRole('ADMIN')){

       console.log('je suis admin')
       this.router.navigate(['/admin'])

     }

     else {

       this.router.navigate(['/user']);
         }
    });
  }




}
