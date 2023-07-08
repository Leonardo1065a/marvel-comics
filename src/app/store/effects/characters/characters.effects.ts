import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { charactersActions } from '@store/actions';
import { CharactersService } from '@store/services';
import { map } from 'rxjs/operators';

@Injectable()
export class CharactersEffects {
  load$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(charactersActions.load),
        map(({ url, identifier }) => {
          this.service.load(url, identifier);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private service: CharactersService) {
    // not to do
  }
}
