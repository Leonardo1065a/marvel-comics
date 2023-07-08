import { buildId } from '@core/utils';
import { EventData } from '@interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { eventsActions as action } from '@store/actions';

export const featureKey = 'events';
export interface State extends EntityState<EventData> {
  control: {
    isLoading: boolean;
    lastUpdate: Date;
  };
  error: any;
}

export const adapter: EntityAdapter<EventData> = createEntityAdapter<EventData>(
  {
    selectId: (item: EventData) => {
      return buildId(item);
    },
  }
);

export const initialState: State = adapter.getInitialState({
  control: {
    isLoading: null,
    lastUpdate: null,
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

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
