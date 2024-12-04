import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageDown from "../components/PageDown/PageDown";

describe("PageDown Component", () => {
  it("contains the necessary contents", () => {
    render(<PageDown />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Maintenance Logo");
    expect(screen.getByText("Page Unavailable")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We're sorry, but this page is currently down. Please try again later."
      )
    ).toBeInTheDocument();
  });
});
