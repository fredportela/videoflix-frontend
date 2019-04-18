import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isLogged()) {
            const tokenJwt = this.authService.getToken();
            req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${tokenJwt}`
                }
            });
        }
        return next.handle(req);
    }
}
