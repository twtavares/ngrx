import { Action } from '@ngrx/store';

export enum GamesActionsTypes {
  GamesRequest = '[Games] List Request',
  GamesSuccess = '[Games] List Success',
  GamesFail = '[Games] List Fail'
}

export class GamesListRequest implements Action {
  readonly type = GamesActionsTypes.GamesRequest;
}

export class GamesListSucess implements Action {
  readonly type = GamesActionsTypes.GamesSuccess

  constructor(public payload: string) {}
}

export class GamesListFail implements Action {
  readonly type = GamesActionsTypes.GamesFail

  constructor(public payload: string) {}
}
