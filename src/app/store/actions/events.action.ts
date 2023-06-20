import { createAction, props } from '@ngrx/store';
import { EventData } from 'app/interfaces';

export const eventsActions = {
  clear: createAction('[Buyer Events] Clear All'),
  load: createAction('[Buyer Events] Load', props<{ url: string; identifier: string }>()),
  updateAll: createAction('[Buyer Events] Update All', props<{ data: EventData[] }>()),
  updateControl: createAction('[Buyer Events] Update Control', props<{ data: any }>()),
};
