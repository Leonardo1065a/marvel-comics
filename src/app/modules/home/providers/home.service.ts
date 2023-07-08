import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CommonsService } from '@core/services';
import { environment } from '@environments/environment';
import { EventData } from '@interfaces';
import { eventsActions } from '@store/actions';
import { events } from '@store/selectors';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService
  extends CommonsService<EventData[]>
  implements Resolve<any>
{
  private gateway = `${environment.gateway}/v1/public`;

  // _lastUpdate$ = new BehaviorSubject(new Date());

  _lastUpdate$: Observable<any>;

  constructor() {
    super();
  }

  private getData() {
    const { gateway, __store } = this;

    const url = `${gateway}/events`;

    const identifier = 'events';

    __store.dispatch(eventsActions.load({ identifier, url }));

    this.__data$ = __store.select(
      events.selectByIdentifierWithSize({ identifier, size: 3 })
    );

    this.__control$ = __store.select(events.selectControl());

    this._lastUpdate$ = __store.select(events.selectLastUpdate());

    // this._lastUpdate$.next(new Date());
  }

  resolve() {
    this.getData();
  }

  updateListEvents() {
    const { __store, gateway } = this;

    const url = `${gateway}/events`;

    const identifier = 'events';

    // this._lastUpdate$.next(new Date());

    __store.dispatch(eventsActions.load({ identifier, url }));
  }
}
