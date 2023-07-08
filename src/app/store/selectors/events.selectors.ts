import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromEvents } from '@store/reducers';
import { EventData } from 'app/interfaces';

declare type State = fromEvents.State;

export const selectEventsState = createFeatureSelector<fromEvents.State>(
  fromEvents.featureKey
);

export const selectAllEvents = createSelector(
  selectEventsState,
  fromEvents.selectAll
);

export const selectByIdentifier = (props: { identifier: string }) => {
  return createSelector(
    selectAllEvents,
    (entities: EventData[]): EventData[] => {
      return entities.filter((_: EventData) => {
        return _.identifier === props.identifier;
      });
    }
  );
};

export const selectByIdentifierWithSize = (props: {
  identifier: string;
  size: number;
}) => {
  return createSelector(
    selectAllEvents,
    (entities: EventData[]): EventData[] => {
      const data = entities.filter((_: EventData) => {
        return _.identifier === props.identifier;
      });

      const random = Math.floor(Math.random() * (entities.length - props.size));
      return data.slice(random, random + props.size);
    }
  );
};

export const selectControl = () => {
  return createSelector(selectEventsState, (state: State): any => {
    return state.control;
  });
};

export const selectLastUpdate = () => {
  return createSelector(selectEventsState, (state: State): any => {
    return state.control.lastUpdate;
  });
};
