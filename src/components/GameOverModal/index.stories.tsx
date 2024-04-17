import { Story } from "@ladle/react";
import GameOverModal from ".";

export const GameOverModalStory: Story = () => (
  <GameOverModal gameState="won" onClickReset={() => {}} />
);

GameOverModalStory.storyName = "GameOverModal";
