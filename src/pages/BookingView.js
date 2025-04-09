import { useState } from "react";
import "../styles/BookingView.scss";

const BookingView = ({ availableTimes, setavailableTimes }) => {
  const [fields, setFields] = useState({
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  const updateField = (field) => (event) => {
    setFields({
      ...fields,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted fields", fields);
    // submit fields
  };

  return (
    <main className="booking-container container">
      <h1>INFORMATION DETAILS</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          aria-label="Reservation date"
          onChange={updateField("date")}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          required
          aria-label="Reservation time"
          onChange={updateField("time")}
        >
          {availableTimes.map((timeSlot, index) => (
            <option value={timeSlot} key={index}>
              {timeSlot}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          required
          aria-label="Number of guests"
          onChange={updateField("numberOfGuests")}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          required
          aria-label="Select an occasion"
          onChange={updateField("occasion")}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          aria-label="Submit reservation form"
        />
      </form>
    </main>
  );
};

export default BookingView;
