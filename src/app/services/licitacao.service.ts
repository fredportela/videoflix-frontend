// tslint:disable-next-line:import-blacklist
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class LicitacaoService {

    constructor(private http: HttpClient) { }

    public getAll(filters?: any): Observable<any> {
        const params = this.setFilters(filters);
        return this.http.get<any>(`${environment.endPoint}/licitacoes`,{ params });
    }

    public getStatistics(): Observable<any> {
        return this.http.get<any>(`${environment.endPoint}/statistics`);
    }

    private setFilters(filters?: any): HttpParams {
        var params = new HttpParams();

        if (filters) {
            for (let key in filters) {
                params = params.append(`${key}`, `${filters[key]}`);
            }
        }

        return params;
    }
}
