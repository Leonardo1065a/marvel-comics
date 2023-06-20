import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Store } from '@ngrx/store';
import { eventsActions } from '@store/actions';
import { events } from '@store/selectors';
@Injectable({
  providedIn: 'root',
})
export class TesteService {
  private _gateway = `${environment.gateway}/v1/public/events`;
  constructor(private store: Store) {}

  get() {
    const url = `${this._gateway}`;
    const identifier = 'events';
    this.store.dispatch(eventsActions.load({ identifier, url }));

    const data = this.store.select(events.selectByIdentifier({ identifier }));

    data.subscribe((_) => {
      console.log('leo', _);
    });
  }
}
