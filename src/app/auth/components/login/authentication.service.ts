import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from 'app/shared';
import {Http} from "@angular/http";
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthenticationService {

  loggedIn = false;

  constructor(private http: Http) {
  }

  login(user: User): Observable<any> {
    return this.http.post('http://localhost:8080/login', user).map(response => {
      console.log(response.headers);
      const token = response.headers.get('Authorization');
      localStorage.setItem("token", token);
      this.loggedIn = true;
      return true;
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }


}
