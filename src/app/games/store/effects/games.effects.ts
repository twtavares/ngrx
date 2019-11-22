import { GamesService } from '../../services/games.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';

import { GameActions } from '../actions';
import { of } from 'rxjs';

@Injectable()
export class GamesEffects {

  gamesListRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.GamesListRequest),
      switchMap(() =>
        this.gamesService.getGamesTop().pipe(
          map((games) => GameActions.GamesListSuccess({ games }),
          catchError(error => of(GameActions.GamesListFail({error}))))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private gamesService: GamesService
  ) {}

}
