import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button/Button";

const mockProps = {
  buttonContent: "Click me",
  handleClick: jest.fn(),
  inlineStyle: { backgroundColor: "blue", color: "white" },
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

  it("applies inline styles correctly", () => {
    render(<Button {...mockProps} />);
    const button = screen.getByRole("button", {
      name: mockProps.buttonContent,
    });
    expect(button).toHaveStyle(
      `background-color: ${mockProps.inlineStyle.backgroundColor}`
    );
    expect(button).toHaveStyle(`color: ${mockProps.inlineStyle.color}`);
  });
});
