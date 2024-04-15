import { useState } from "react";
import { useBoardStore } from "../../zustand/board";
import { Button } from "../Button";
import HexGrid from "../HexGrid";

interface IGame {}

const Game = ({}: IGame) => {
  const [isStarted, setIsStarted] = useState(false);
  const [firstTileClicked, setFirstTileClicked] = useState(false);
  const { state, dispatch } = useBoardStore();

  const onClickStart = () => {
    setIsStarted(true);
    dispatch({ type: "INITIALISE_BOARD", payload: { width: 15 } });
  };

  const onTileClick = (event: React.MouseEvent, x: number, y: number) => {
    event.preventDefault();

    if (event.button === 2) {
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
    <div>
      <Button onClick={onClickStart}>Start</Button>

      {isStarted && <HexGrid board={state.board} onTileClick={onTileClick} />}
    </div>
  );
};

export default Game;
