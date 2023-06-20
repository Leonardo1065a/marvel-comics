import * as fromEvents from './events.reducer';

export interface AppState {
  [fromEvents.featureKey]?: fromEvents.State;
}

export { fromEvents };
