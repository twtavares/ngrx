import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

import { GameActions } from '../actions';

@Injectable()
export class GamesEffects {

  constructor(private actions$: Actions) {}

}
