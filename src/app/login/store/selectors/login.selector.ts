import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../reducers/login.reducer';

const selectCoreState = createFeatureSelector<LoginState>('login');

export const getLogin= createSelector(
  selectCoreState,
  (state: LoginState) => state
);
