import { EventData } from '@interfaces';
import { createAction, props } from '@ngrx/store';

export const eventsActions = {
  clear: createAction('[Events] Clear All'),
  load: createAction('[Events] Load', props<{ url: string; identifier: string }>()),
  updateAll: createAction('[Events] Update All', props<{ data: EventData[] }>()),
  updateControl: createAction('[Events] Update Control', props<{ data: any }>()),
};
