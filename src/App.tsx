import { useEffect, useMemo, useState } from "react";
import Game from "./components/Game";
import { useBoardStore } from "./zustand/board";
import { Button } from "./components/Button";
import Levels from "./components/Levels";
import GameOverModal from "./components/GameOverModal";
import { Flag } from "./components/Icons/Flag";

function App() {
  const [isInPwa, setIsInPwa] = useState(false);
  const { state, dispatch } = useBoardStore();
  const [isStarted, setIsStarted] = useState(false);
  const [firstTileClicked, setFirstTileClicked] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInPwa(true);
    }
  }, []);

  const onClickStart = (width: number = 14, numberOfMines: number = 40) => {
    setIsStarted(true);
    dispatch({
      type: "INITIALISE_BOARD",
      payload: { width, numberOfMines },
    });
  };

  const onClickReset = () => {
    setIsStarted(false);
    setFirstTileClicked(false);
    dispatch({ type: "RESET" });
  };

  const numberOfFlagsLeft = useMemo(() => {
    return (
      state.numberOfMines -
      state.board.flat().filter((tile) => tile.isFlagged).length
    );
  }, [state.board, state.numberOfMines]);

  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  return (
    <div
      className="flex w-screen items-center justify-center bg-gray-200 px-2 font-orbitron"
      style={{
        height: isInPwa ? "100vh" : "100dvh",
      }}
    >
      <div
        className="flex flex-col items-center rounded-md border-8 border-gray-600 bg-gray-400 px-4 text-white"
        style={{
          maxHeight: isInPwa ? "calc(100vh - 32px)" : "calc(100dvh - 16px)",
        }}
      >
        <div className="flex w-full flex-wrap items-center justify-between p-4 md:px-8">
          {state.gameState !== "idle" && (
            <Button onClick={onClickReset}>Reset</Button>
          )}

          <h1 className="order-first w-full pb-4 text-center text-lg font-bold md:order-none md:w-auto md:flex-1 md:pb-0 md:text-2xl">
            Hexagonal Minesweeper
          </h1>

          {state.gameState !== "idle" && (
            <div className="flex items-center">
              <Flag className="mr-2 h-8 w-8 text-red-700" />
              <h1 className="text-xl">
                {numberOfFlagsLeft < 0 ? 0 : numberOfFlagsLeft}
              </h1>
            </div>
          )}
        </div>

        {state.gameState === "idle" && <Levels onClickStart={onClickStart} />}

        <Game
          isStarted={isStarted}
          firstTileClicked={firstTileClicked}
          setFirstTileClicked={setFirstTileClicked}
        />
      </div>

      <GameOverModal gameState={state.gameState} onClickReset={onClickReset} />
    </div>
  );
}

export default App;
