import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "../components/ContactForm/ContactForm";
import {
  NAME_EMPTY_ERROR,
  NAME_LENGTHY_ERROR,
  NAME_NUMBER_ERROR,
  STARTING_POINT_EMPTY_ERROR,
  ENDING_POINT_EMPTY_ERROR,
  SAME_LOCATION_ERROR,
  PHONE_NUMBER_EMPTY_ERROR,
  PHONE_NUMBER_INVALID_ERROR,
} from "../constants";

describe("ContactForm Component", () => {
  it("shows empty error for all fields", () => {
    render(<ContactForm tripDetails={jest.fn} />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(NAME_EMPTY_ERROR)).toBeInTheDocument();
    expect(screen.getByText(STARTING_POINT_EMPTY_ERROR)).toBeInTheDocument();
    expect(screen.getByText(ENDING_POINT_EMPTY_ERROR)).toBeInTheDocument();
    expect(screen.getByText(PHONE_NUMBER_EMPTY_ERROR)).toBeInTheDocument();
  });

  it("shows lengthy name error", () => {
    render(<ContactForm tripDetails={jest.fn} />);
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, {
      target: { value: "Kochira Katsushika-ku Kameari Kōen Mae Hashutsujo" },
    });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(NAME_LENGTHY_ERROR)).toBeInTheDocument();
  });

  it("shows error when contains the number", () => {
    render(<ContactForm tripDetails={jest.fn} />);
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "Mr.1" } });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(NAME_NUMBER_ERROR)).toBeInTheDocument();
  });

  it("shows error when Your Home Town and Destination place is the same", () => {
    render(<ContactForm tripDetails={jest.fn} />);
    const startingPointInput = screen.getByLabelText(/your home town/i);
    const endingPointInput = screen.getByLabelText(
      /where would you like to go?/i
    );
    fireEvent.change(startingPointInput, { target: { value: "Pollachi" } });
    fireEvent.change(endingPointInput, { target: { value: "Pollachi" } });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(SAME_LOCATION_ERROR)).toBeInTheDocument();
  });

  it("shows error when phone number is invalid", () => {
    render(<ContactForm tripDetails={jest.fn} />);
    const phoneNumberInput = screen.getByLabelText(/contact number/i);
    fireEvent.change(phoneNumberInput, { target: { value: "12345678901" } });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(PHONE_NUMBER_INVALID_ERROR)).toBeInTheDocument();
  });

  it("accepts the details when the form details are correct", () => {
    const mockfn = jest.fn();
    render(<ContactForm tripDetails={mockfn} />);
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
    expect(mockfn).toHaveBeenCalledTimes(1);
  });
});
