import { Story } from "@ladle/react";
import Levels from ".";

export const LevelsStory: Story = () => (
  <Levels onClickStart={(width, numberOfMines) => {}} />
);

LevelsStory.storyName = "Levels";
