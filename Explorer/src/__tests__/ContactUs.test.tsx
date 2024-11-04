import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "../components/ContactUs/ContactUs";
import { CONTACT_HEADER, CONTACT_CONTENT } from "../constants";

describe("ContactUs Component", () => {
  it("renders the ContactUs component and its static content", () => {
    const { container } = render(<ContactUs />);
    expect(container).toBeTruthy();
    expect(screen.getByText(CONTACT_HEADER)).toBeInTheDocument();
    expect(screen.getByText(CONTACT_CONTENT)).toBeInTheDocument();
  });

  it("when flag changes to true success banner appears", () => {
    render(<ContactUs />);
    const nameInput = screen.getByLabelText(/name/i);
    const startingPointInput = screen.getByLabelText(/your home town/i);
    const endingPointInput = screen.getByLabelText(
      /where would you like to go?/i
    );
    const phoneNumberInput = screen.getByLabelText(/contact number/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(startingPointInput, { target: { value: "Pollachi" } });
    fireEvent.change(endingPointInput, { target: { value: "Thanjavur" } });
    fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });

    fireEvent.click(submitButton);
    expect(screen.getByText(/Thank You/i)).toBeInTheDocument();
  });
});
