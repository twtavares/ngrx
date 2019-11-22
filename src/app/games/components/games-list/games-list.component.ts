import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GamesListComponent {
  @Input() gamesList$: any;
  @Input() columnsToDisplay$: string[];
  @Input() labelColumns$: any[];
  @Output() $addFavorite: EventEmitter<any> = new EventEmitter();

  public expandedElement: any;

  addFavorite(game) {
    this.$addFavorite.emit(game);
  }
}
