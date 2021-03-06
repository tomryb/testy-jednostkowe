import {render, screen} from '@testing-library/react'
import TopBar from './topBar_zadanie2';

describe('TopBar.js', () => {
  it('SHOULD RENDER VALUE FROM PROPS', () => {
    const exampleTitle = "Example title"

    render(<TopBar title={exampleTitle} />);
    const topBarElement = screen.getByTestId('topBar-content');

    console.log(topBarElement);
    expect(topBarElement).toHaveTextContent(exampleTitle);
  });
  it('should have class', () => {
    const exampleTitle = "Example title"

    render(<TopBar title={exampleTitle} />);
    const topBarElement = screen.getByTestId('topBar-content');

    console.log(topBarElement);
    expect(topBarElement).toHaveClass("topBar");
  });
});