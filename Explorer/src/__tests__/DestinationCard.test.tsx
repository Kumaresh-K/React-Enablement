import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import { MemoryRouter } from "react-router-dom";

const mockProps = {
  catchPhrase: "Never Ending Paddy Fields",
  city: "Pollachi",
  shortDescription: "Pollachi is a town in Coimbatore district",
};

const renderWithRoutes = () => {
  return render(
    <MemoryRouter>
      <DestinationCard {...mockProps} />
    </MemoryRouter>
  );
};

describe("DestinationCard Component", () => {
  it("contains the catchPhrase, city, and short description", () => {
    const { container } = renderWithRoutes();
    expect(container).toHaveTextContent(mockProps.catchPhrase);
    expect(container).toHaveTextContent(mockProps.city);
    expect(container).toHaveTextContent(mockProps.shortDescription);
  });

  it("has appropriate image of destination", () => {
    renderWithRoutes();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      `/src/assets/${mockProps.city}.png`
    );
  });
});
