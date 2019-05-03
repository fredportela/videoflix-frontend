// tslint:disable-next-line:import-blacklist
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class VideoService {

    constructor(private http: HttpClient) { }

    public getVideo(video: string): Observable<any> {
        return this.http.get<any>(`${environment.endPoint}/movies/${video}`);
    }

    public getThumbnail(video: string): Observable<any> {
        return this.http.get<any>(`${environment.endPoint}/thumbnail/${video}`);
    }

    public getScreenshot(video: string): Observable<any> {
        return this.http.get<any>(`${environment.endPoint}/screenshot/${video}`);
    }
}
