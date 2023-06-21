import * as fromCharacters from './characters.reducer';
import * as fromEvents from './events.reducer';

export interface AppState {
  [fromEvents.featureKey]?: fromEvents.State;
  [fromCharacters.featureKey]?: fromCharacters.State;
}

export { fromCharacters, fromEvents };
