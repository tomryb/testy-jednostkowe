import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

const buttonText = "button";
const mockHandleClick = jest.fn();

describe("Button.js", () => {
  it("should display text from props", () => {
    render(<Button text={buttonText} handleClick={() => {}}></Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveTextContent(buttonText);
  });
  it("should display text after click", () => {
    render(<Button text={buttonText} handleClick={mockHandleClick}></Button>);
    const buttonElement = screen.getByTestId("button");
    fireEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalled();
  });
});
