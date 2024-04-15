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

  return { ...state, board };
};
