import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { comicsActions } from '@store/actions';
import { ComicsService } from '@store/services';
import { map } from 'rxjs/operators';

@Injectable()
export class ComicsEffects {
  load$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(comicsActions.load),
        map(({ url, identifier }) => {
          this.service.load(url, identifier);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private service: ComicsService) {
    // not to do
  }
}
