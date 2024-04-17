import { Tile } from "../zustand/board/types";

export const getAdjacentTiles = (x: number, y: number) => [
  { x: x - 1, y: y },
  { x: x + 1, y: y },
  { x: x, y: y - 1 },
  { x: x, y: y + 1 },
  { x: x + 1, y: y + (x % 2 === 0 ? 1 : -1) },
  { x: x - 1, y: y + (x % 2 === 0 ? 1 : -1) },
];

export const findAdjacentZeroTiles = (
  board: Tile[][],
  x: number,
  y: number
): { x: number; y: number }[] => {
  const adjacentZeroTiles: { x: number; y: number }[] = [];

  const queue = [{ x, y }];
  const visited = new Set<string>();

  while (queue.length) {
    const { x, y } = queue.shift() as { x: number; y: number };

    if (visited.has(`${x},${y}`)) {
      continue;
    }

    visited.add(`${x},${y}`);

    if (
      !!board[x] &&
      !!board[x][y] &&
      board[x][y]?.adjacentMines === 0 &&
      !board[x][y]?.isMine
    ) {
      adjacentZeroTiles.push({ x, y });

      queue.push(...getAdjacentTiles(x, y));
    } else if (!!board[x] && !!board[x][y]) {
      adjacentZeroTiles.push({ x, y });
    }
  }

  return adjacentZeroTiles;
};
