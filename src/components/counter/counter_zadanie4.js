import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);


  return (
    <>
      <div>
        Counter: <span data-testid="counter-value">{counter}</span>
        <button onClick={incrementCounter} data-testid="counter-button-increment">+</button>
        <button onClick={decrementCounter} data-testid="counter-button-decrement">-</button>
        <button onClick={resetCounter} data-testid="counter-button-reset">reset</button>
      </div>
    </>
  );
}

export default Counter;
