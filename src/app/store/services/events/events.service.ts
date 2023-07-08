import { Injectable } from '@angular/core';
import { CommonsStoreService } from '@core/services';
import { Store } from '@ngrx/store';
import { eventsActions } from '@store/actions';

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

  public override load(url: string, identifier: string) {
    this.loadData(url, identifier);
  }
}
