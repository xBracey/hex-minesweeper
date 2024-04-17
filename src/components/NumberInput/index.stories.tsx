import { Story } from "@ladle/react";
import NumberInput from ".";

export const NumberInputStory: Story = () => (
  <NumberInput value={0} setValue={() => {}} label="NumberInput" />
);

NumberInputStory.storyName = "NumberInput";
