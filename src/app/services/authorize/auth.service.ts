import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router, private user: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.user.isValid) {
      return true;
    } else {
       const navi: NavigationExtras = {queryParams: {redirectedRoute: state.url}};
     this.router.navigate(['login'], navi);
      return false;
    }
  }


}
