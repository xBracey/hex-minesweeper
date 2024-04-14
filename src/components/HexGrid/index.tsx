import HexTile from "../HexTile";

interface IHexGrid {
  width: number;
}

// Rhombus grid
const HexGrid = ({ width }: IHexGrid) => {
  const widthNums = Array.from({ length: width }, (_, i) => i);

  const tileWidth = 50;

  const onGridClick = (i: number, j: number) => {
    console.log(`HexTile at (${i}, ${j}) clicked`);
  };

  return (
    <div className="flex">
      <div style={{ fontSize: 0 }}>
        {widthNums.map((i) => (
          <div key={i} className="flex justify-center" style={{ fontSize: 0 }}>
            {widthNums
              .filter((_, j) => j < i)
              .map((j) => (
                <HexTile
                  key={j}
                  width={tileWidth}
                  margin={2}
                  onClick={() => onGridClick(i, j)}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexGrid;
