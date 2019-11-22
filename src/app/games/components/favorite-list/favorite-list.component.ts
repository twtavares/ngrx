import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent {
  @Input() favoriteList$: any;
  @Output() $removeFavorite: EventEmitter<any> = new EventEmitter();

  removeFavorite(game) {
    this.$removeFavorite.emit(game);
  }

}
