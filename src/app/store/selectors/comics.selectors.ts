import { ComicsData } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromComics } from '@store/reducers';

declare type State = fromComics.State;

export const selectComicsState = createFeatureSelector<fromComics.State>(
  fromComics.featureKey
);

export const selectAllComics = createSelector(selectComicsState, fromComics.selectAll);

export const selectByIdentifier = (props: { identifier: string }) => {
  return createSelector(selectAllComics, (entities: ComicsData[]): ComicsData[] => {
    return entities.filter((_: ComicsData) => {
      return _.identifier === props.identifier;
    });
  });
};

export const selectControl = () => {
  return createSelector(selectComicsState, (state: State): any => {
    return state.control;
  });
};
