import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Promo from "../components/Promo/Promo";
import { MemoryRouter } from "react-router-dom";

describe("Promo Component", () => {
  it("Check promo component present in the screen", () => {
    render(
      <MemoryRouter>
        <Promo />
      </MemoryRouter>
    );
    expect(screen.getByText("WELCOME TO EXPLORER")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute('src', 'test-file-stub');
  });
});
