import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div>
          <h1 data-test="count">{count}</h1>
        </div>
        <div>
          <button data-test="decrement" title={"-"} onClick={decrementCount}>-</button>
          <button data-test="increment" title={"+"} onClick={incrementCount}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
