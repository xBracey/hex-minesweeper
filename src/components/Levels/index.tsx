import { useState } from "react";
import { Button } from "../Button";
import NumberInput from "../NumberInput";

const easy = { width: 9, numberOfMines: 10 };
const medium = { width: 12, numberOfMines: 30 };
const hard = { width: 15, numberOfMines: 45 };

interface ILevels {
  onClickStart: (width: number, numberOfMines: number) => void;
}

const Levels = ({ onClickStart }: ILevels) => {
  const [width, setWidth] = useState<number>(medium.width);
  const [numberOfMines, setNumberOfMines] = useState<number>(
    medium.numberOfMines
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4">
        <Button onClick={() => onClickStart(easy.width, easy.numberOfMines)}>
          Easy
        </Button>
        <Button
          onClick={() => onClickStart(medium.width, medium.numberOfMines)}
        >
          Medium
        </Button>
        <Button onClick={() => onClickStart(hard.width, hard.numberOfMines)}>
          Hard
        </Button>
      </div>
      {/* Custom */}
      <div
        className="flex  items-center justify-center gap-6 p-4"
        style={{ width: "400px" }}
      >
        <NumberInput value={width} setValue={setWidth} label="Width" />
        <NumberInput
          value={numberOfMines}
          setValue={setNumberOfMines}
          label="No. of Mines"
        />
        <div className="mt-7">
          <Button onClick={() => onClickStart(width, numberOfMines)}>
            Custom
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Levels;
