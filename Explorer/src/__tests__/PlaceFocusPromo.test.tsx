import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PlaceFocusPromo from "../components/PlaceFocusPromo/PlaceFocusPromo";

const mockProps = {
  destination: {
    place: "CDW - The people who get it",
    city: "Chennai",
    shortDescription: "One of the branches",
    fullDescription: "CDW is a company that has multiple branches",
    relatedPlaces: ["US", "Hyderabad", "Bengaluru"],
  },
};

describe("PlaceFocusPromo Component", () => {
  it("checks the contents present in the screen", () => {
    render(<PlaceFocusPromo {...mockProps} />);
    expect(screen.getByText(mockProps.destination.place)).toBeInTheDocument();
    expect(screen.getByText(mockProps.destination.city)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/src/assets/chennai.png"
    );
    expect(screen.getByText(/32/i)).toBeInTheDocument();
    expect(
      screen.getByText(mockProps.destination.fullDescription)
    ).toBeInTheDocument();
  });
});
