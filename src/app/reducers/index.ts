import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromLogin from '../login/store/reducers/login.reducer'
import { environment } from '../../environments/environment';

export interface State {
  login: fromLogin.LoginState
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.LoginReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
