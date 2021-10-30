import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
// guard to block the components to un logged users
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.user$.pipe(
      map((user) => {
        if (state.url === '/login') {
          if (user) {
            return this.router.parseUrl('/dashboard');
          }
          return true;
        }
        if (!user) {
          return this.router.parseUrl('/login');
        }
        return true;
      })
    );
  }

  constructor(public authService: AuthService, public router: Router) {}
}
