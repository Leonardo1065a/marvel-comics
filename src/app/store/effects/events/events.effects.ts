import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { eventsActions } from '@store/actions';
import { EventsService } from '@store/services';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsEffects {
  load$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(eventsActions.load),
        map(({ url, identifier }) => {
          this.service.load(url, identifier);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private service: EventsService) {
    // not to do
  }
}
