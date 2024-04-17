import { useBoardStore } from "../../zustand/board";
import HexGrid from "../HexGrid";

interface IGame {
  isStarted: boolean;
  firstTileClicked: boolean;
  setFirstTileClicked: (value: boolean) => void;
}

const Game = ({ isStarted, firstTileClicked, setFirstTileClicked }: IGame) => {
  const { state, dispatch } = useBoardStore();

  const onTileClick = (
    revealOrFlag: "reveal" | "flag",
    x: number,
    y: number
  ) => {
    console.log("onTileClick", revealOrFlag, x, y);

    if (revealOrFlag === "flag") {
      dispatch({ type: "FLAG_TILE", payload: { x, y } });
      return;
    }

    if (!firstTileClicked) {
      setFirstTileClicked(true);
      dispatch({ type: "FIRST_CLICK", payload: { x, y } });
    } else {
      dispatch({ type: "REVEAL_TILE", payload: { x, y } });
    }
  };

  return (
    <div
      className="mx-auto pb-4"
      style={{
        touchAction: "manipulation",
        pointerEvents: state.gameState !== "playing" ? "none" : "auto",
      }}
    >
      {isStarted && <HexGrid board={state.board} onTileClick={onTileClick} />}
    </div>
  );
};

export default Game;
