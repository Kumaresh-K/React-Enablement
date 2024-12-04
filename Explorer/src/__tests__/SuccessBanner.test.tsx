import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SuccessBanner from "../components/SuccessBanner/SuccessBanner";

const mockProps = {
  name: "John Doe",
  startingPoint: "New York",
  endingPoint: "Los Angeles",
};

describe("SuccessBanner Component", () => {
  it("displays the banner with correct details", () => {
    const { getByTestId } = render(<SuccessBanner {...mockProps} />);
    const bannerContent = getByTestId("banner").textContent;
    expect(bannerContent).toContain("John Doe");
    expect(bannerContent).toContain("New York");
    expect(bannerContent).toContain("Los Angeles");
    expect(bannerContent).toBe(
      "Thank You John Doe for expressing your interest in travelling with us. Our Sales team will get back with the best packages from New York to Los Angeles."
    );
  });
});
