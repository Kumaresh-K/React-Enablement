import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";

const mockProps = {
  title: "Iron Man",
  content: "The Movie from 2008",
  inlineStyle: { color: "red" },
};

describe("Header Component", () => {
  it("contains the provided details", () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.content)).toBeInTheDocument();
  });
});
