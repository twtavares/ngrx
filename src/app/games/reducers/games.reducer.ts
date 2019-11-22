import { Action, createReducer, on } from '@ngrx/store';
import { GameActions } from '../actions';

export const gamesFeatureKey = 'games';

export interface State {
  data: object;
  error: object;
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  data: {},
  error: {},
  loading: false,
  loaded:  false
};

const gamesReducer = createReducer(
  initialState,

  on(GameActions.ListGamesRequest, state => ({
    ...state,
    loading: true
  })),

  on(GameActions.ListGamesSuccess, (state, { games }) => ({
    ...state,
    data: games,
    loading: false,
    loaded: true
  })),

  on(GameActions.ListGamesFail, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    loaded: true
  }))

);

export function reducer(state: State | undefined, action: Action) {
  return gamesReducer(state, action);
}
