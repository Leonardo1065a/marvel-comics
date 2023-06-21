import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CommonsService } from '@core/services';
import { environment } from '@environments/environment';
import { CharacterData } from '@interfaces';
import { charactersActions } from '@store/actions';
import { characters } from '@store/selectors';

@Injectable()
export class CharacterService extends CommonsService<CharacterData[]> implements Resolve<any> {
  private gateway = `${environment.gateway}/v1/public`;

  constructor() {
    super();
  }

  private getData() {
    const { gateway, __store } = this;

    const identifier = 'characters';

    const url = `${gateway}/characters`;

    __store.dispatch(charactersActions.load({ identifier, url }));

    this.__data$ = __store.select(characters.selectByIdentifier({ identifier }));
  }

  resolve() {
    this.getData();
  }
}
