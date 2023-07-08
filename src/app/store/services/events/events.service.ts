import { Injectable } from '@angular/core';
import { CommonsStoreService } from '@core/services';
import { Store } from '@ngrx/store';
import { eventsActions } from '@store/actions';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class EventsService extends CommonsStoreService<any> {
  constructor(private store: Store) {
    super();
  }

  protected update(data: any[], identifier: string) {
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

  protected updateControl(data: any) {
    this.store.dispatch(eventsActions.updateControl({ data }));
  }

  protected override async loadData(url: string, identifier: string) {
    const { __http } = this;

    this.updateControl({ isLoading: true });

    try {
      const data = await lastValueFrom(__http.get<any>(url));

      const items = this.getEmbeddedData(data);

      this.updateControl({ lastUpdate: new Date() });

      this.update(items, identifier);
    } catch (e) {
      // not to do
    }

    this.updateControl({ isLoading: false });
  }
}
