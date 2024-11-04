import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeaderText from "../components/HeaderText/HeaderText";

const mockProps = {
  title: "Iron Man",
  content: "The Movie from 2008",
  inlineStyle: { color: "red" },
};

describe("HeaderText Component", () => {
  it("contains the provided details", () => {
    render(<HeaderText {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.content)).toBeInTheDocument();
  });

  it("has the inline styles", () => {
    render(<HeaderText {...mockProps} />);
    expect(screen.getByTestId("content-container")).toHaveStyle(
      `color : ${mockProps.inlineStyle.color}`
    );
  });
});
