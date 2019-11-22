import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';

import { LoginActions } from '../actions';

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private route: Router
  ) {}

  loginRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.loginRequest),
      map(login => LoginActions.loginSuccess(login))
    )
  })

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      tap(() => this.route.navigate(['games']))
    )
  },{dispatch:false})

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.logoutRequest),
      tap(() => this.route.navigate(['login']))
    )
  },{dispatch:false})
}
