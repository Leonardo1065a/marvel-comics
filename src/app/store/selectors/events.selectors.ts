import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromEvents } from '@store/reducers';
import { EventData } from 'app/interfaces';

declare type State = fromEvents.State;

export const selectEventsState = createFeatureSelector<fromEvents.State>(fromEvents.featureKey);

export const selectAllEvents = createSelector(selectEventsState, fromEvents.selectAll);

export const selectByIdentifier = (props: { identifier: string }) => {
  return createSelector(selectAllEvents, (entities: EventData[]): EventData[] => {
    return entities.filter((_: EventData) => {
      return _.identifier === props.identifier;
    });
  });
};

export const selectControl = () => {
  return createSelector(selectEventsState, (state: State): any => {
    return state.control;
  });
};
