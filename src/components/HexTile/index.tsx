import { CSSProperties } from "react";
import styles from "./index.module.css";

interface IHexTile {
  children?: React.ReactNode;
  width: number;
  margin: number;
  onClick?: () => void;
}

const HexTile = ({ children, width, margin, onClick }: IHexTile) => {
  const hexStyle = {
    "--s": `${width}px`,
    "--m": `${margin}px`,
    "--f": `${width * 1.732 + 4 * margin - 1}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.HexTile} style={hexStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default HexTile;
