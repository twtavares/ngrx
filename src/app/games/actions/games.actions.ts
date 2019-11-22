import { createAction, props } from '@ngrx/store';

export const ListGamesRequest = createAction(
  '[Games] List Request'
);

export const ListGamesSuccess = createAction(
  '[Games] List Success',
  props<{games: any}>() // TODO criar interface
);

export const ListGamesFail = createAction(
  '[Games] List Fail',
  props<{error: any}>()
);




