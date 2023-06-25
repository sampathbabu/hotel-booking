import { Button } from "@mui/material";

const IncrementButton = ({
  minIndex,
  setCurrentIndex,
  currentIndex,
  maxIndex,
}) => {
  return (
    <div style={{display:"flex",alignItems:"center"}}>
      <Button disabled={(currentIndex<=minIndex)}
        onClick={() => {
        setCurrentIndex((prev) => prev - 1);
        }}
      >
        -
      </Button>
      <div>{currentIndex}</div>
      <Button disabled={(currentIndex>=maxIndex)}
        onClick={() => {
          setCurrentIndex((prev) => prev + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default IncrementButton;