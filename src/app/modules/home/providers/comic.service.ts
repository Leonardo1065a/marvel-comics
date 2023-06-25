import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CommonsService } from '@core/services';
import { environment } from '@environments/environment';
import { ComicsData } from '@interfaces';
import { comicsActions } from '@store/actions';
import { comics } from '@store/selectors';

@Injectable()
export class ComicService extends CommonsService<ComicsData[]> implements Resolve<any> {
  private gateway = `${environment.gateway}/v1/public`;

  constructor() {
    super();
  }

  private getData() {
    const { gateway, __store } = this;

    const identifier = 'comics';

    const url = `${gateway}/comics`;

    __store.dispatch(comicsActions.load({ identifier, url }));

    this.__data$ = __store.select(comics.selectByIdentifier({ identifier }));
  }

  resolve() {
    this.getData();
  }
}
