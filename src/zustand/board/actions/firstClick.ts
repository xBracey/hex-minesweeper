import { findAdjacentZeroTiles } from "../../../utils/findAdjacentZeroTiles";
import { BoardState } from "../types";

const findAdjacentMines = (
  board: BoardState["board"],
  x: number,
  y: number
): number => {
  const minesXAdjacent =
    board[x].filter((tile, i) => Math.abs(y - i) === 1 && tile.isMine).length ||
    0;

  const minesAbove =
    board[x - 1]?.filter((tile, i) => (i === y || i === y - 1) && tile.isMine)
      .length || 0;

  const minesBelow =
    board[x + 1]?.filter((tile, i) => (i === y || i === y + 1) && tile.isMine)
      .length || 0;

  return minesXAdjacent + minesAbove + minesBelow;
};

export type FirstClick = {
  type: "FIRST_CLICK";
  payload: { x: number; y: number };
};

export const firstClickAction = (
  state: BoardState,
  action: FirstClick
): BoardState => {
  const { x, y } = action.payload;

  const board = state.board.map((row, rowIndex) =>
    row.map((tile, colIndex) => {
      if (rowIndex === x && colIndex === y) {
        return { ...tile, isRevealed: true };
      } else if (rowIndex - x <= 2 && colIndex - y <= 2) {
        return tile;
      } else {
        return { ...tile, isMine: Math.random() > 0.75 };
      }
    })
  );

  const boardWithAdjacentMines = board.map((row, i) =>
    row.map((tile, j) => {
      const adjacentMines = findAdjacentMines(board, i, j);

      return { ...tile, adjacentMines };
    })
  );

  const adjacentZeroTiles = findAdjacentZeroTiles(boardWithAdjacentMines, x, y);

  adjacentZeroTiles.forEach(({ x, y }) => {
    boardWithAdjacentMines[x][y].isRevealed = true;
  });

  return { ...state, board: boardWithAdjacentMines };
};
