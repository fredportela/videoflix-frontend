import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const token: any = this.authService.getToken();
        if (this.authService.isLogged()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.authService.logout();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
