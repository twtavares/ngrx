import { createAction, props } from '@ngrx/store';

export const loginRequest = createAction(
  '[Login] Login Request',
  props<{ login: any }>()
)

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ login: any }>()
)

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: any }>()
)

export const logoutRequest = createAction(
  '[Logout] Logout Request',
  props<{ login: any }>()
)

