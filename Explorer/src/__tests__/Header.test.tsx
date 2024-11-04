import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = () => {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
};

describe("Header Component", () => {
  renderWithRouter();
  it("renders image with navigation functionlity", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test-file-stub");
    expect(image).toHaveAttribute("alt", "explorer logo");
    fireEvent.click(image);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("have the navigation component", () => {
    renderWithRouter();
    expect(screen.getByText("Hotels")).toBeInTheDocument();
  });
});
