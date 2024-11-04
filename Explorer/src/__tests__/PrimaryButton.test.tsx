import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

const mockProps = {
  buttonContent: "Click me",
  handleClick: jest.fn(),
  inlineStyle: { backgroundColor: "blue", color: "white" },
};

describe("PrimaryButton Component", () => {
  it("renders button with correct content", () => {
    render(<PrimaryButton {...mockProps} />);
    const button = screen.getByRole("button", {
      name: mockProps.buttonContent,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(mockProps.buttonContent);
  });

  it("calls handleClick when clicked", () => {
    render(<PrimaryButton {...mockProps} />);
    const button = screen.getByRole("button", {
      name: mockProps.buttonContent,
    });
    fireEvent.click(button);
    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies inline styles correctly", () => {
    render(<PrimaryButton {...mockProps} />);
    const button = screen.getByRole("button", {
      name: mockProps.buttonContent,
    });
    expect(button).toHaveStyle(
      `background-color: ${mockProps.inlineStyle.backgroundColor}`
    );
    expect(button).toHaveStyle(`color: ${mockProps.inlineStyle.color}`);
  });
});
