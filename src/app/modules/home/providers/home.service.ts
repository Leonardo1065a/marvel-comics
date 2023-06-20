import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CommonsService } from '@core/services';
import { environment } from '@environments/environment';
import { EventData } from '@interfaces';
import { eventsActions } from '@store/actions';
import { events } from '@store/selectors';

@Injectable()
export class HomeService extends CommonsService<EventData[]> implements Resolve<any> {
  private gateway = `${environment.gateway}/v1/public`;

  constructor() {
    super();
  }

  private getData() {
    const { gateway, __store } = this;

    const url = `${gateway}/events`;

    const identifier = 'events';

    __store.dispatch(eventsActions.load({ identifier, url }));

    this.__data$ = __store.select(events.selectByIdentifier({ identifier }));

    this.__control$ = __store.select(events.selectControl());
  }

  resolve() {
    this.getData();
  }
}
