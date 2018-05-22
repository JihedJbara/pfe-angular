import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import {User} from "../../../shared/user";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private registerService: RegisterService) { }

  private router: Router;
  user = new User();

  register() {
    console.log(this.user);
    this.registerService.register(this.user).subscribe((data) => {
      console.log(data)
        //this.router.navigate(['/auth/login']);
    });
  }



}
