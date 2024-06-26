import { Dispatch } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BoardState } from "./types";
import {
  InitialiseBoard,
  initialiseBoardAction,
} from "./actions/initialiseBoard";
import { FirstClick, firstClickAction } from "./actions/firstClick";
import { RevealTile, revealTileAction } from "./actions/revealTile";
import { FlagTile, flagTileAction } from "./actions/flagTile";

type Reset = { type: "RESET" };

type BoardActions =
  | InitialiseBoard
  | FirstClick
  | RevealTile
  | FlagTile
  | Reset;

const reducer = (state: BoardState, action: BoardActions): BoardState => {
  switch (action.type) {
    case "INITIALISE_BOARD":
      return initialiseBoardAction(state, action);

    case "FIRST_CLICK":
      return firstClickAction(state, action);

    case "REVEAL_TILE":
      return revealTileAction(state, action);

    case "FLAG_TILE":
      return flagTileAction(state, action);

    case "RESET":
      return { board: [], gameState: "idle", numberOfMines: 0 };
  }
};

interface BoardStore {
  state: BoardState;
  dispatch: Dispatch<BoardActions>;
}

export const useBoardStore = create<BoardStore>()(
  persist(
    (set) => ({
      state: { board: [], gameState: "idle", numberOfMines: 0 },
      dispatch: (action: BoardActions) =>
        set((state) => ({ ...state, state: reducer(state.state, action) })),
    }),
    {
      name: "board",
    }
  )
);
