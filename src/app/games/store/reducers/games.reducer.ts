import { Action, createReducer, on } from '@ngrx/store';
import { GameActions } from '../actions';
import { GamesListState } from '../../interfaces/games.interface';

export const gamesFeatureKey = 'games';

export const initialState: GamesListState = {
  data: [],
  error: {},
  loading: false,
  loaded:  false
};

const gamesReducer = createReducer(
  initialState,

  on(GameActions.GamesListRequest, state => ({
    ...state,
    loading: true
  })),

  on(GameActions.GamesListSuccess, (state, { games }) => ({
    ...state,
    data: games,
    loading: false,
    loaded: true
  })),

  on(GameActions.GamesListFail, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    loaded: true
  }))

);

export function reducer(state: GamesListState | undefined, action: Action) {
  return gamesReducer(state, action);
}
