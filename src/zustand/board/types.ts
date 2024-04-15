export interface Tile {
  isMine: boolean;
  isFlagged: boolean;
  isRevealed: boolean;
  adjacentMines: number;
}

export interface BoardState {
  board: Tile[][];
}
