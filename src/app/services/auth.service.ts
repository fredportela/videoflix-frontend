import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private $isLoggedInListerner: Subject<boolean> = new Subject();

    constructor(private http: HttpClient,
                private cookies: CookieService) { }

    // Autentica usuario e grava em cookie
    public login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${environment.endPoint}/login`,
            JSON.stringify({ username, password }))
            .pipe(map(session => {
                if (session && session.token) {
                    this.$isLoggedInListerner.next(true);
                    this.saveToken(session.token);
                }
            }));
    }

    public logout(): void {
        this.$isLoggedInListerner.next(false);
        this.cookies.delete('token');
    }

    public isLogged(): boolean {
        const token = this.getToken();
        if (!token) { return false; }
        const date = this.getTokenExpirationDate(token);
        if (!date) { return true; }
        return (date.valueOf() > new Date().valueOf());
    }

    public getToken(): string {
      return this.cookies.get('token');
    }

    private saveToken(token: string): void {
        this.cookies.set('token', token);
    }

    public getIsLoggedinListerner() {
        return this.$isLoggedInListerner.asObservable();
    }

    private getTokenExpirationDate(token: string): Date {
      const decoded = jwt_decode(token);

      if (!decoded.exp) { return null };

      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    }
}
