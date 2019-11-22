import { GamesState } from './index';
import { ActionReducerMap } from '@ngrx/store';
import {
  GamesListState,
  // FavoritesState
} from '../../interfaces/games.interface';

import * as fromRoot from '../../../reducers';
import * as fromGames from './games.reducer';
// import * as fromFavorites from './favorites.reducer';

export interface GamesState {
  list: GamesListState;
}

export const reducers: ActionReducerMap<GamesState> = {
  list: fromGames.reducer
};

export interface State extends fromRoot.State {
  games: GamesState;
}
