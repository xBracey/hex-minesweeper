import { Story } from "@ladle/react";
import Modal from ".";

export const ModalStory: Story = () => (
  <Modal open={true} closeModal={() => {}}>
    Hello World
  </Modal>
);

ModalStory.storyName = "Modal";
