import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// Store
import * as fromGames from './store/reducers';
import { GamesEffects } from './store/effects/games.effects';

// Components
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { GamesComponent } from './games.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// Routing
import { GamesRoutingModule } from './games-routing.module';

// Vendor
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  declarations: [
    GamesListComponent,
    GamesComponent,
    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatTableModule,
    StoreModule.forFeature('games', fromGames.reducers),
    EffectsModule.forFeature([GamesEffects]),
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
  ]
})
export class GamesModule { }
