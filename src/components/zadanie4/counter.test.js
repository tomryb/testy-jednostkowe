import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";
import useCounter from "../zadanie7/useCounter";

//to do hooka

const mockIncrement = jest.fn();

describe("Counter.js", () => {
  //z hookiem

  beforeEach(() => {
    jest.mock("../zadanie7/useCounter.js", () => ({
      count: 0,
      increment: mockIncrement,
    }));
  });

  it("should display counter value", () => {
    render(<Counter />);
    const counterValueElement = screen.getByTestId("counterValue");

    expect(counterValueElement).toHaveTextContent("0");
  });

  //bez hooka

  // it('should call counter increment', () => {
  //   render(<Counter />);
  //   const counterButtonElement = screen.getByTestId('counterButton');
  //   fireEvent.click(counterButtonElement);
  //
  //   expect(mockIncrement).toHaveBeenCalled();
  // });

  //to zakomentowane to przed hookiem

  // it("should display init value of counter", () => {
  //   render(<Counter></Counter>);
  //   const valueElement = screen.getByTestId("counter-value");

  //   expect(valueElement).toHaveTextContent('0');
  // });
  // it('should display correct value after click increment button', () => {
  //   render(<Counter />);
  //   const valueElement = screen.getByTestId('counter-value');
  //   const buttonIncrementElement = screen.getByTestId('counter-button-increment');

  //   fireEvent.click(buttonIncrementElement);

  //   expect(valueElement).toHaveTextContent('1');
  // });
  // it('should display correct value after click decrement button', () => {
  //   render(<Counter />);
  //   const valueElement = screen.getByTestId('counter-value');
  //   const buttonDecrementElement = screen.getByTestId('counter-button-decrement');

  //   fireEvent.click(buttonDecrementElement);

  //   expect(valueElement).toHaveTextContent('-1');
  // });
  // it('should display correct value after click reset button', () => {
  //   render(<Counter />);
  //   const valueElement = screen.getByTestId('counter-value');
  //   const buttonIncrementElement = screen.getByTestId('counter-button-increment');
  //   const buttonResetElement = screen.getByTestId('counter-button-reset');

  //   fireEvent.click(buttonIncrementElement);
  //   fireEvent.click(buttonResetElement);

  //   expect(valueElement).toHaveTextContent('0');
  // });
});
