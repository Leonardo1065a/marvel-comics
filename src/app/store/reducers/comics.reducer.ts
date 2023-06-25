import { buildId } from '@core/utils';
import { ComicsData } from '@interfaces';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { comicsActions as action } from '@store/actions';

export const featureKey = 'comics';

export interface State extends EntityState<ComicsData> {
  control: {
    isLoading: boolean;
  };
  error: any;
}

export const adapter: EntityAdapter<ComicsData> = createEntityAdapter<ComicsData>({
  selectId: (item: ComicsData) => {
    return buildId<ComicsData>(item);
  },
});

export const initialState: State = adapter.getInitialState({
  control: {
    isLoading: null,
  },
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(action.clear, (state: any) => {
    return adapter.removeAll(state);
  }),
  on(action.updateAll, (state, action) => {
    return adapter.upsertMany(action.data, {
      ...state,
    });
  }),
  on(action.updateControl, (state, action) => {
    return {
      ...state,
      control: {
        ...state.control,
        ...action.data,
      },
    };
  })
);

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();
