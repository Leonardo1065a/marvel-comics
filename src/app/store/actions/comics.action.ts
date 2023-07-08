import { ComicsData } from '@interfaces';
import { createAction, props } from '@ngrx/store';

export const comicsActions = {
  clear: createAction('[Comics] Clear All'),
  load: createAction('[Comics] Load', props<{ url: string; identifier: string }>()),
  updateAll: createAction('[Comics] Update All', props<{ data: ComicsData[] }>()),
  updateControl: createAction('[Comics] Update Control', props<{ data: any }>()),
};
