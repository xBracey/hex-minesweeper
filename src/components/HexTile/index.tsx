import { CSSProperties } from "react";
import styles from "./index.module.css";
import { Flag } from "../Icons/Flag";
import { Mine } from "../Icons/Mine";

interface IHexTile {
  width: number;
  margin: number;
  onClick?: (event: React.MouseEvent) => void;
  minesAdjacent?: number;
  isMine?: boolean;
  isFlagged?: boolean;
  isRevealed?: boolean;
}

const HexTile = ({
  width,
  margin,
  onClick,
  minesAdjacent,
  isMine,
  isFlagged,
  isRevealed,
}: IHexTile) => {
  const hexStyle = {
    "--s": `${width}px`,
    "--m": `${margin}px`,
  } as React.CSSProperties;

  const hexStyleBorder = {
    "--s": `${width * 0.93}px`,
    "--m": `0px`,
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.HexTile} relative bg-black`}
      style={hexStyle}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
    >
      <div
        className={`${
          styles.HexTile
        } absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 ${
          isRevealed ? "bg-gray-300" : "bg-gray-700"
        }`}
        style={hexStyleBorder}
      >
        {isRevealed && minesAdjacent !== undefined && !isMine && !isFlagged && (
          <div className="text-bas absolute inset-0 flex items-center justify-center text-gray-900">
            {minesAdjacent}
          </div>
        )}
        {isRevealed && isMine && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Mine className="h-6 w-6 text-red-600" />
          </div>
        )}
        {isFlagged && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Flag className="h-5 w-5 text-red-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HexTile;
