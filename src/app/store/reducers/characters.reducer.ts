import { buildId } from '@core/utils';
import { CharacterData } from '@interfaces';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { charactersActions as action } from '@store/actions';

export const featureKey = 'characters';

export interface State extends EntityState<CharacterData> {
  control: {
    isLoading: boolean;
  };
  error: any;
}

export const adapter: EntityAdapter<CharacterData> = createEntityAdapter<CharacterData>({
  selectId: (item: CharacterData) => {
    return buildId<CharacterData>(item);
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
