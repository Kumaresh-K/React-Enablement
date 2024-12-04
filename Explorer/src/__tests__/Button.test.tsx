import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button/Button";

const mockProps = {
  buttonContent: "Click me",
  handleClick: jest.fn(),
};

describe("Button Component", () => {
  it("renders button with correct content", () => {
    render(<Button {...mockProps} />);
    const button = screen.getByRole("button", {
      name: mockProps.buttonContent,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(mockProps.buttonContent);
  });

  it("calls handleClick when clicked", () => {
    render(<Button {...mockProps} />);
    const button = screen.getByRole("button", {
      name: mockProps.buttonContent,
    });
    fireEvent.click(button);
    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
  });
});
