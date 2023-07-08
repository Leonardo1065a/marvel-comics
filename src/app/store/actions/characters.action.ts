import { CharacterData } from '@interfaces';
import { createAction, props } from '@ngrx/store';

export const charactersActions = {
  clear: createAction('[Characters] Clear All'),
  load: createAction('[Characters] Load', props<{ url: string; identifier: string }>()),
  updateAll: createAction('[Characters] Update All', props<{ data: CharacterData[] }>()),
  updateControl: createAction('[Characters] Update Control', props<{ data: any }>()),
};
