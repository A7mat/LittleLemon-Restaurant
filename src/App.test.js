import { render, screen } from "@testing-library/react";
import BookingView from "./pages/BookingView";
import "@testing-library/jest-dom";

test("Renders the BookingForm heading", () => {
  // Provide a valid availableTimes array
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  render(<BookingView availableTimes={availableTimes} setavailableTimes={() => {}} />);

  const headingElement = screen.getByText("INFORMATION DETAILS");
  expect(headingElement).toBeInTheDocument();
});

test("Check if initializeTime returns correct expected value", () => {
    
})