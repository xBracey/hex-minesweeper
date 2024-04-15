import { BoardState } from "../types";

export type FlagTile = {
  type: "FLAG_TILE";
  payload: { x: number; y: number };
};

export const flagTileAction = (
  state: BoardState,
  action: FlagTile
): BoardState => {
  const { x, y } = action.payload;

  const board = state.board.map((row, rowIndex) =>
    row.map((tile, colIndex) => {
      if (rowIndex === x && colIndex === y) {
        return { ...tile, isFlagged: !tile.isFlagged };
      }

      return tile;
    })
  );

  return { ...state, board };
};
