import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

// Reducers
import * as fromGames from './store/reducers';

// Selectors
import * as GamesSelectors from './store/selectors/games.selector';

import { GamesService } from '../games/services/games.service'

// Actions
import { GamesListRequest } from './store/actions/games.actions';
import { GameInterface } from './interfaces/games.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public columnsToDisplay = ['name', 'popularity', 'button'];
  public labelColumns = { name: 'Nome', popularity: 'popularity', button: ''};
  public dataSource: any;

  constructor(
    private games: GamesService
  ) { }

  ngOnInit() {
    this.games.getGamesTop().subscribe((games: any) => {
      this.dataSource = games.map(el => el.game);
    })
  }

}
