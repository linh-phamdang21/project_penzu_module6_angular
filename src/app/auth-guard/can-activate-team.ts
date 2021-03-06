import {Injectable} from '@angular/core';

import {Permissions} from './permissions';
import {Observable} from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CanActivateTeam implements CanActivate  {
  constructor(private permission: Permissions,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (this.permission.canActivate()) {
      return this.permission.canActivate();
    } else {
      this.router.navigateByUrl('/no-access');
      return false;
    }
  }

}
