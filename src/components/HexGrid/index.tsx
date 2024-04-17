import { useWindowSize } from "@uidotdev/usehooks";
import { Tile } from "../../zustand/board/types";
import HexTile from "../HexTile";
import styles from "./index.module.css";

interface IHexGrid {
  board: Tile[][];
  onTileClick: (revealOrFlag: "reveal" | "flag", x: number, y: number) => void;
}

// Rhombus grid
const HexGrid = ({ board, onTileClick }: IHexGrid) => {
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth && windowWidth < 768;

  const boardSize = board.length;

  const tileWidth = isMobile || !windowWidth ? 50 : windowWidth / boardSize / 2;

  return (
    <div
      className={`${styles.HexGrid} flex overflow-scroll pb-4 md:overflow-hidden`}
      style={
        isMobile
          ? {
              maxWidth: "calc(100vw - 60px)",
              maxHeight: "calc(100dvh - 180px)",
            }
          : {}
      }
    >
      <div style={{ fontSize: 0 }}>
        {board.map((row, i) => (
          <div key={i} className="flex justify-center" style={{ fontSize: 0 }}>
            {row.map((tile, j) => (
              <HexTile
                key={j}
                width={tileWidth}
                margin={tileWidth / 20}
                onClick={(revealOrFlag) => onTileClick(revealOrFlag, i, j)}
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
