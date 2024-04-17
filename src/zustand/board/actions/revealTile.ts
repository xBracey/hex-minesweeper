import { findAdjacentZeroTiles } from "../../../utils/findAdjacentZeroTiles";
import { BoardState } from "../types";

export type RevealTile = {
  type: "REVEAL_TILE";
  payload: { x: number; y: number };
};

export const revealTileAction = (
  state: BoardState,
  action: RevealTile
): BoardState => {
  const { x, y } = action.payload;

  if (state.board[x][y].isRevealed || state.board[x][y].isFlagged) {
    return state;
  }

  const board = state.board.map((row, rowIndex) =>
    row.map((tile, colIndex) => {
      if (rowIndex === x && colIndex === y) {
        return {
          ...tile,
          isRevealed: true,
        };
      }

      return tile;
    })
  );

  const adjacentZeroTiles = findAdjacentZeroTiles(board, x, y);

  adjacentZeroTiles.forEach(({ x, y }) => {
    board[x][y].isRevealed = true;
  });

  const hasWon = board.every((row) =>
    row.every((tile) => tile.isRevealed || tile.isMine)
  );

  return {
    ...state,
    board,
    gameState: state.board[x][y].isMine
      ? "lost"
      : hasWon
      ? "won"
      : state.gameState,
  };
};
