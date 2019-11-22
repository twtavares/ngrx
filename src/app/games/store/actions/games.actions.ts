import { createAction, props } from '@ngrx/store';

export const GamesListRequest = createAction(
  '[Games] List Request'
);

export const GamesListSuccess = createAction(
  '[Games] List Success',
  props<{games: any}>()
);

export const GamesListFail = createAction(
  '[Games] List Fail',
  props<{error: any}>()
);


