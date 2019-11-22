import { Action, createReducer, on } from '@ngrx/store';
import { LoginActions } from '../actions'

export const gamesFeatureKey = 'games';

export interface LoginState {
  data: object;
  error: object;
  loading: boolean;
  loaded: boolean;
}

export const initialState: LoginState = {
  data: null,
  error: null,
  loading: false,
  loaded:  false
};

const loginReducer = createReducer(
  initialState,

  on(LoginActions.loginRequest, state => ({
    ...state,
    loading: true
  })),

  on(LoginActions.loginSuccess, (state, { login }) => ({
    ...state,
    data: login,
    loading: false,
    loaded: true
  })),

  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    loaded: true
  })),

  on(LoginActions.logoutRequest, (state, { login }) => ({
    ...state,
    data: null,
    loading: false,
    loaded: true
  }))

);

export function LoginReducer(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
