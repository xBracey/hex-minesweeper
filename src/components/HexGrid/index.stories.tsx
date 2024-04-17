import { Story } from "@ladle/react";
import HexGrid from ".";

export const HexGridStory: Story = () => (
  <HexGrid board={[]} onTileClick={() => {}} />
);

HexGridStory.storyName = "HexGrid";
