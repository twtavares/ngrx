import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGames from '../reducers';
import { GamesState } from '../reducers';

const selectCoreState = createFeatureSelector<GamesState>('games');

export const getGamesState = createSelector(
  selectCoreState,
  (state: fromGames.GamesState) => state
);

export const getGamesListState = createSelector(
  getGamesState,
  (state: fromGames.GamesState) => state.list
);
