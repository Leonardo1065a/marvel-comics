import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { eventsActions } from '@store/actions';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class EventsService {
  constructor(private store: Store, private http: HttpClient) {}

  private getEmbeddedData(response: any) {
    return response.data.results;
  }

  private async loadData(url: string, identifier: string) {
    const { http } = this;

    this.updateControl({ isLoading: true });

    try {
      const data = await lastValueFrom(http.get<any>(url));

      const items = this.getEmbeddedData(data);

      this.update(items, identifier);
    } catch (e) {
      // not to do
    }

    this.updateControl({ isLoading: false });
  }

  private update(data: any[], identifier: string) {
    this.store.dispatch(
      eventsActions.updateAll({
        data: data.map((_: any) => {
          return {
            identifier,
            ..._,
          };
        }),
      })
    );
  }

  private updateControl(data: any) {
    this.store.dispatch(eventsActions.updateControl({ data }));
  }

  public load(url: string, identifier: string) {
    this.loadData(url, identifier);
  }
}
