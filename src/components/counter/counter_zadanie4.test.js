import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter_zadanie4";

describe("Counter.js", () => {
  it("should display init value of counter", () => {
    render(<Counter></Counter>);
    const valueElement = screen.getByTestId("counter-value");

    expect(valueElement).toHaveTextContent('0');
  });
  it('should display correct value after click increment button', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    const buttonIncrementElement = screen.getByTestId('counter-button-increment');

    fireEvent.click(buttonIncrementElement);

    expect(valueElement).toHaveTextContent('1');
  });
  it('should display correct value after click decrement button', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    const buttonDecrementElement = screen.getByTestId('counter-button-decrement');

    fireEvent.click(buttonDecrementElement);

    expect(valueElement).toHaveTextContent('-1');
  });
  it('should display correct value after click reset button', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    const buttonIncrementElement = screen.getByTestId('counter-button-increment');
    const buttonResetElement = screen.getByTestId('counter-button-reset');

    fireEvent.click(buttonIncrementElement);
    fireEvent.click(buttonResetElement);

    expect(valueElement).toHaveTextContent('0');
  });
});
