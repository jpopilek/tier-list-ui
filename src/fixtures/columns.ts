import { IGame, games } from './games';

export interface IColumn {
  /** Name for the column in the UI */
  label: string;
  /** List of games in the column */
  games: Array<IGame>;
}

export interface IColumns {
  [columnName: string]: IColumn;
}
/**
 * Fixture for the columns we would like the teir list to have
 */
export const columnsFixture: IColumns = {
  unrated: {
    label: 'Unrated',
    games: games,
  },
  loveIt: {
    label: 'Love it ❤️',
    games: [],
  },
  likeIt: {
    label: 'Like it 👌',
    games: [],
  },
  leaveIt: {
    label: 'Leave it 👎',
    games: [],
  },
  haveNotPlayed: {
    label: "Haven't Played It 🤷‍♂️",
    games: [],
  },
};
