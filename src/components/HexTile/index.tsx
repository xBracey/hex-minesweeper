import styles from "./index.module.css";
import { Flag } from "../Icons/Flag";
import { Mine } from "../Icons/Mine";
import { useLongPress, useWindowSize } from "@uidotdev/usehooks";

const minesAdjacentToColor = (minesAdjacent: number) => {
  switch (minesAdjacent) {
    case 1:
      return "text-blue-600";
    case 2:
      return "text-green-600";
    case 3:
      return "text-red-600";
    case 4:
      return "text-purple-600";
    case 5:
      return "text-yellow-600";
    case 6:
      return "text-pink-600";
    default:
      return "text-gray-600";
  }
};

interface IHexTile {
  width: number;
  margin: number;
  onClick?: (revealOrFlag: "reveal" | "flag") => void;
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
  const fontSize = width * 0.6;

  const hexStyle = {
    "--s": `${width}px`,
    "--m": `${margin}px`,
  } as React.CSSProperties;

  const hexStyleBorder = {
    "--s": `${width * 0.93}px`,
    "--m": `0px`,
    fontSize,
  } as React.CSSProperties;

  const onReveal = () => onClick && onClick("reveal");
  const onFlag = () => onClick && onClick("flag");

  const { width: windowWidth } = useWindowSize();

  const attrs = useLongPress(
    () => {
      onFlag();
    },
    { threshold: 200 }
  );

  const isMobile = windowWidth && windowWidth < 768;

  return (
    <div
      className={`${styles.HexTile} relative bg-black ${minesAdjacentToColor(
        minesAdjacent || 0
      )}`}
      style={hexStyle}
      onClick={onReveal}
      onContextMenu={(e) => {
        e.preventDefault();
        if (isMobile) {
          navigator.vibrate(200);
          return;
        }
        console.log("onContextMenu");
        onFlag();
      }}
      {...attrs}
    >
      <div
        className={`${
          styles.HexTile
        } absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-bold ${
          isRevealed ? "bg-gray-300" : "bg-gray-700"
        }`}
        style={hexStyleBorder}
      >
        {isRevealed && minesAdjacent !== undefined && !isMine && !isFlagged && (
          <div className="absolute inset-0 flex items-center justify-center">
            {minesAdjacent > 0 ? minesAdjacent : ""}
          </div>
        )}
        {isRevealed && isMine && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Mine
              className="text-red-600"
              style={{
                width: fontSize,
                height: fontSize,
              }}
            />
          </div>
        )}
        {isFlagged && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Flag
              className="text-red-600"
              style={{
                width: fontSize * 0.75,
                height: fontSize * 0.75,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HexTile;
