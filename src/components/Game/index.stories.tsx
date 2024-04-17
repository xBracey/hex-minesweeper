import { Story } from "@ladle/react";
import Game from ".";

export const GameStory: Story = () => (
  <Game
    isStarted={false}
    firstTileClicked={false}
    setFirstTileClicked={() => {}}
  />
);

GameStory.storyName = "Game";
