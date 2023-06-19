import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resultMap } from '../../utils/result-map';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  private _gateway = `${environment.gateway}/v1/public/events`;
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<any>(`${this._gateway}`).pipe(resultMap());
  }

  getcharacters(): Observable<any> {
    return this.http.get<any>(`${this._gateway}/82967`).pipe(resultMap());
  }
}
