import React, { useState } from "react";
import Input from "../zadanie5/input";
import useCounter from "../zadanie7/useCounter";

function Counter() {
  //z hookiem

  const hook = useCounter();

  // const [counter, setCounter] = useState(0);
  // const incrementCounter = () => setCounter(counter + 1);
  // const decrementCounter = () => setCounter(counter - 1);
  // const resetCounter = () => setCounter(0);
  // const changeCounter = (value) => setCounter(Number(value));

  return (
    <div>
      {/* Counter: <span data-testid="counter-value">{counter}</span>
        <button onClick={incrementCounter} data-testid="counter-button-increment">+</button>
        <button onClick={decrementCounter} data-testid="counter-button-decrement">-</button>
        <button onClick={resetCounter} data-testid="counter-button-reset">reset</button>
        <Input initValue={counter} handleSubmit={changeCounter} /> */}

      {/* z hookiem */}

      <div data-testid="counterValue">{hook.count}</div>
      <button onClick={hook.increment} data-testid="counterButton">+</button>
      <button onClick={hook.decrement}>-</button>
      <button onClick={hook.reset}>reset</button>
    </div>
  );
}

export default Counter;
