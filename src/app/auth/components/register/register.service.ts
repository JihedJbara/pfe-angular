import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {User} from 'app/shared';

@Injectable()
export class RegisterService {


  constructor(private http: Http) {
  }



  register(user: User): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/register',user).map(response => {
      console.log(response);

      return true;
    });
  }
}
