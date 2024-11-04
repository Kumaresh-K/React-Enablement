import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DestinationList from "../components/DestinationList/DestinationList";
import destinationDetails from "../assets/data/placeDetails.json";
import { MemoryRouter } from "react-router-dom";

const mockProps = {
  header: "Content Header",
  catchPhase: "Here is the Catch Phase",
  destinations: destinationDetails,
  inlineStyle: { color: "red" },
};
const renderWithRoutes = () => {
  return render(
    <MemoryRouter>
      <DestinationList {...mockProps} />
    </MemoryRouter>
  );
};
describe("DestinationList Component", () => {
  it("contains header & catch phase", () => {
    renderWithRoutes();
    expect(screen.getByText(mockProps.header)).toBeInTheDocument();
    expect(screen.getByText(mockProps.catchPhase)).toBeInTheDocument();
  });

  it("contains all destinations cards", () => {
    const { container } = renderWithRoutes();
    const destinationCardsContainer = container.querySelector(
      ".destinationCardsContainer"
    );
    destinationDetails.forEach((destination) => {
      expect(destinationCardsContainer).toHaveTextContent(destination.city);
    });
  });

  it("has the inline styles", () => {
    const { container } = renderWithRoutes();
    const destinations = container.querySelector(".destinations");
    expect(destinations).toHaveStyle(`color : ${mockProps.inlineStyle.color}`);
  });
});
