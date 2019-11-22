import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesComponent } from './games.component';


@NgModule({
  declarations: [
    GamesListComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MatTableModule
  ]
})
export class GamesModule { }
