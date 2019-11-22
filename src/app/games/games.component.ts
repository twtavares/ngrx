import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

// Reducers
import * as fromGames from './store/reducers';

// Selectors
import * as GamesSelectors from './store/selectors/games.selector';

// Actions
import { GamesListRequest } from './store/actions/games.actions';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public columnsToDisplay = ['name', 'popularity', 'button'];
  public labelColumns = { name: 'Nome', popularity: 'popularity', button: ''};
  public dataSource: any;
  public favorites = [];
  public favorites$: Observable<any>;
  public games$: Observable<any>;

  constructor(
    private store: Store<fromGames.GamesState>
  ) { }

  ngOnInit() {
    this.store.dispatch(GamesListRequest());
    this.games$ = this.store.pipe(select(GamesSelectors.getGamesListState));
    this.games$.subscribe(store => {
      this.dataSource = store.data.map(el => el.game);
    });

  }

}
