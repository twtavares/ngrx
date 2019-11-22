import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GamesTopInteface } from '../interfaces/games.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService extends BaseService {

  public getGamesTop(): Observable<GamesTopInteface> {
    return this.get('/games/top?limit=10').pipe(
      map(({ top }) => top)
    );
  }

}
