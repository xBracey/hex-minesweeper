import { BoardState } from "../types";

export type InitialiseBoard = {
  type: "INITIALISE_BOARD";
  payload: { width: number; numberOfMines: number };
};

export const initialiseBoardAction = (
  state: BoardState,
  action: InitialiseBoard
): BoardState => {
  const { width, numberOfMines } = action.payload;

  const widthNums = Array.from({ length: width }, (_, i) => i);

  const board = widthNums.map((i) =>
    widthNums
      .filter((j) => j !== 0 || i % 2 !== 0)
      .map(() => ({
        isMine: false,
        isFlagged: false,
        isRevealed: false,
        adjacentMines: 0,
      }))
  );

  return { ...state, board, gameState: "playing", numberOfMines };
};
