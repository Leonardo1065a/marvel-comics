import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resultMap } from '../../utils/result-map';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TesteService {
    private _gateway = `${environment.gateway}/v1/public/comics`;
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get<any>(`${ this._gateway }`,)
          .pipe(resultMap());
    }
}