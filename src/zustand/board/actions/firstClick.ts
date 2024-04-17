import {
  findAdjacentZeroTiles,
  getAdjacentTiles,
} from "../../../utils/findAdjacentZeroTiles";
import { BoardState } from "../types";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const findAdjacentMines = (
  board: BoardState["board"],
  x: number,
  y: number
): number => {
  const adjacentTiles = getAdjacentTiles(x, y);

  const minesXAdjacent = (
    adjacentTiles.map(({ x, y }) => {
      if (!board[x] || !board[x][y]) {
        return 0;
      }

      return board[x][y].isMine ? 1 : 0;
    }) as number[]
  ).reduce((acc, curr) => acc + curr, 0);

  return minesXAdjacent;
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

  const tilesWhereMinesCanBe: { x: number; y: number }[] = [];

  const board = state.board.map((row, rowIndex) =>
    row.map((tile, colIndex) => {
      if (rowIndex === x && colIndex === y) {
        return { ...tile, isRevealed: true };
      } else if (Math.abs(rowIndex - x) <= 2 && Math.abs(colIndex - y) <= 2) {
        return tile;
      } else {
        tilesWhereMinesCanBe.push({ x: rowIndex, y: colIndex });
        return tile;
      }
    })
  );

  shuffleArray(tilesWhereMinesCanBe);

  const mines = tilesWhereMinesCanBe.slice(0, state.numberOfMines);

  const boardWithMines = board.map((row, i) =>
    row.map((tile, j) => {
      if (mines.some((mine) => mine.x === i && mine.y === j)) {
        return { ...tile, isMine: true };
      }

      return tile;
    })
  );

  const boardWithAdjacentMines = boardWithMines.map((row, i) =>
    row.map((tile, j) => {
      const adjacentMines = findAdjacentMines(boardWithMines, i, j);

      return { ...tile, adjacentMines };
    })
  );

  const adjacentZeroTiles = findAdjacentZeroTiles(boardWithAdjacentMines, x, y);

  adjacentZeroTiles.forEach(({ x, y }) => {
    boardWithAdjacentMines[x][y].isRevealed = true;
  });

  return { ...state, board: boardWithAdjacentMines };
};
