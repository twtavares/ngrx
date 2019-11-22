import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GamesEffects } from './games.effects';

describe('GamesEffects', () => {
  let actions$: Observable<any>;
  let effects: GamesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GamesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GamesEffects>(GamesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
