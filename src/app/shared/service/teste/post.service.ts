import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonsService } from '@core/services';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TesteService extends CommonsService<any> {
  constructor(private http: HttpClient) {
    super();
  }

  async get(url: string) {
    const { http } = this;

    try {
      const data = await lastValueFrom(http.get<any>(url));
      console.log(data);
    } catch (e) {
      // not to do
    }
  }
}
