import { useState } from "react";
import Button from "../../ui/Button";

const MAX_COUNT = 10;

function Hero(props) {
  const { title, description, buttonText } = props;
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    if (counter === MAX_COUNT) {
      alert(`This counter can only count till ${MAX_COUNT}`);
      return;
    }
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="hero flex flex-col justify-center items-center text-white bg-blue-500 min-h-[300px]">
      <div className="hero__title text-2xl font-bold">{title}</div>
      <div className="hero__description">
        {counter === 0
          ? description
          : `You clicked the button ${counter} ${
              counter === 1 ? "time" : "times"
            }.`}
      </div>
      <div className="hero__button flex flex-row mt-4">
        <Button
          className="bg-blue-900"
          size="large"
          variant="dark"
          onClick={updateCounter}
        >
          Click me!
        </Button>
        {counter > 0 && (
          <Button
            className="bg-blue-900 ml-2"
            variant="dark"
            size="large"
            onClick={resetCounter}
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}

export default Hero;
