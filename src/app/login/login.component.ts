import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/authorize/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email = '';
password = '';
redirectedFrom = '';
constructor(private user: UserService,
              private router: Router,
              private acroute: ActivatedRoute) { }

  ngOnInit() {
  console.log('act route', this.acroute.snapshot.queryParams['redirectedRoute'], this.acroute.snapshot);
    this.redirectedFrom = this.acroute.snapshot.queryParams['redirectedRoute'];
  }

  login() {
   const valid = true; // this.user.login(this.email, this.password);
    console.log('redi', this.redirectedFrom);
   if (valid) {
     this.user.isValid = true;
     this.router.navigate(['../order']);
     // this.router.navigate([this.redirectedFrom]);
   } else {
     this.router.navigate(['']);
   }
  }
  cancel() {
  this.router.navigate(['']);
  }

}
