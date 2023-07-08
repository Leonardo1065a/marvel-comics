import { Injectable } from '@angular/core';
import { CommonsStoreService } from '@core/services';
import { comicsActions } from '@store/actions';

@Injectable()
export class ComicsService extends CommonsStoreService<any> {
  constructor() {
    super();
  }

  protected update(data: any[], identifier: string) {
    const { __store } = this;

    __store.dispatch(
      comicsActions.updateAll({
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
    const { __store } = this;

    __store.dispatch(comicsActions.updateControl({ data }));
  }
}
