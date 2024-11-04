import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DestinationNavigator from "../components/DestinationNavigator/DestinationNavigator";
import PlaceFocusPromo from "../components/PlaceFocusPromo/PlaceFocusPromo";
import destinations from "../assets/data/placeDetails.json";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import useNavigationService from "../services/NavigationService";

jest.mock("../services/NavigationService", () => {
  const navigateMock = jest.fn();
  return () => navigateMock;
});

const renderWithRouter = () => {
  const mockprop = { destination: destinations[0] };
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<DestinationNavigator />} />
        <Route
          path="/places/Pollachi"
          element={<PlaceFocusPromo {...mockprop} />}
        />
      </Routes>
    </MemoryRouter>
  );
};

describe("DestinationNavigator Component", () => {
  it("has the all option in the dropdown", () => {
    renderWithRouter();
    const destinationDropdown = screen.getByRole("combobox");
    expect(destinationDropdown).toBeInTheDocument();
    destinations.forEach((destination) => {
      expect(
        screen.getByRole("option", { name: destination.city })
      ).toBeInTheDocument();
    });
  });

  it("navigates to selected destination", () => {
    const navigateMock = useNavigationService();
    renderWithRouter();
    const destinationDropdown = screen.getByRole("combobox");
    fireEvent.change(destinationDropdown, { target: { value: "Pollachi" } });
    const exploreButton = screen.getByText("EXPLORE");
    fireEvent.click(exploreButton);
    expect(navigateMock).toHaveBeenCalledWith("Pollachi");
  });
});
