import { CharacterData } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromCharacters } from '@store/reducers';

declare type State = fromCharacters.State;

export const selectCharactersState = createFeatureSelector<fromCharacters.State>(
  fromCharacters.featureKey
);

export const selectAllCharacters = createSelector(selectCharactersState, fromCharacters.selectAll);

export const selectByIdentifier = (props: { identifier: string }) => {
  return createSelector(selectAllCharacters, (entities: CharacterData[]): CharacterData[] => {
    return entities.filter((_: CharacterData) => {
      return _.identifier === props.identifier;
    });
  });
};

export const selectControl = () => {
  return createSelector(selectCharactersState, (state: State): any => {
    return state.control;
  });
};
