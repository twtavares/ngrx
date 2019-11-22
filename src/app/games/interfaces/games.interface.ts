import { StoreStateInterface } from 'src/app/shared/interfaces/store-state.interface';

export interface GamesTopInteface {
  top: GameInterface[];
}

export interface GameInterface {
  game: {
    _id: number;
    name: string;
    popularity: number;
    giantbomb_id: number;
    box: {
        large: string;
        medium: string;
        small: string;
        template: string;
    },
    logo: {
        large: string;
        medium: string;
        small: string;
        template: string;
    },
    localized_name: string;
    locale: string;
  };
  viewers: number;
  channels: number;
}

export interface GamesListState extends StoreStateInterface {
  data: any[];
}
