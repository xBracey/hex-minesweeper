import { Tile } from "../../zustand/board/types";
import HexTile from "../HexTile";

interface IHexGrid {
  board: Tile[][];
  onTileClick: (event: React.MouseEvent, x: number, y: number) => void;
}

// Rhombus grid
const HexGrid = ({ board, onTileClick }: IHexGrid) => {
  const tileWidth = 50;

  return (
    <div className="flex">
      <div style={{ fontSize: 0 }}>
        {board.map((row, i) => (
          <div key={i} className="flex justify-center" style={{ fontSize: 0 }}>
            {row.map((tile, j) => (
              <HexTile
                key={j}
                width={tileWidth}
                margin={2}
                onClick={(e) => onTileClick(e, i, j)}
                minesAdjacent={tile.adjacentMines}
                isRevealed={tile.isRevealed}
                isMine={tile.isMine}
                isFlagged={tile.isFlagged}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexGrid;
