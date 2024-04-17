import { Button } from "../Button";
import Modal from "../Modal";

interface IGameOverModal {
  gameState: "playing" | "won" | "lost" | "idle";
  onClickReset: () => void;
}

const GameOverModal = ({ gameState, onClickReset }: IGameOverModal) => {
  const open = gameState === "won" || gameState === "lost";

  return (
    <Modal open={open} closeModal={() => {}}>
      <div className="bg-white text-center">
        <h1 className="text-2xl font-bold">
          {gameState === "won" ? "Congratulations!" : "Game Over!"}
        </h1>
        <p className="my-4">
          {gameState === "won"
            ? "You won the game!"
            : "You hit a mine. Better luck next time!"}
        </p>

        <Button onClick={onClickReset}>Play Again</Button>
      </div>
    </Modal>
  );
};

export default GameOverModal;
