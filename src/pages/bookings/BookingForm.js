import { useState } from "react";
import FormField from "./FormField";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ["Birthday", "Anniversary"];

  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a valid time";
  const invalidOccasionErrorMessage = "Please choose a valid occasion";
  const invalidNumberOfGuestsErrorMessage = "Please enter a number between 1 and 10";
  const invalidFirstNameErrorMessage = "First name is required";
  const invalidLastNameErrorMessage = "Last name is required";
  const invalidEmailErrorMessage = "Enter a valid email address";
  const invalidMobileErrorMessage = "Enter a valid 12-digit mobile number";

  // Single state object for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: ""
  });

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    mobile: false,
    date: false,
    time: false,
    numberOfGuests: false,
    occasion: false
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleDateChange = (e) => {
    handleChange("date", e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const isFirstNameValid = () => formData.firstName.trim().length > 0;
  const isLastNameValid = () => formData.lastName.trim().length > 0;
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isMobileValid = () => /^[0-9]{12}$/.test(formData.mobile);
  const isDateValid = () => formData.date !== "";
  const isTimeValid = () => formData.time !== "";
  const isNumberOfGuestsValid = () =>
    formData.numberOfGuests !== "" &&
    formData.numberOfGuests >= minimumNumberOfGuests &&
    formData.numberOfGuests <= maximumNumberOfGuests;
  const isOccasionValid = () => formData.occasion !== "";

  const areAllFieldsValid = () =>
    isFirstNameValid() &&
    isLastNameValid() &&
    isEmailValid() &&
    isMobileValid() &&
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isOccasionValid();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (areAllFieldsValid()) {
      submitData(formData);
    }
  };

  const Required = () => <span style={{ color: "red" }}>*</span>;

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Table reservation</h2>

      <FormField
        label={<><span>First Name</span> <Required /></>}
        htmlFor='first-name'
        hasError={touchedFields.firstName && !isFirstNameValid()}
        errorMessage={invalidFirstNameErrorMessage}
      >
        <input
          type='text'
          id='first-name'
          name='first-name'
          value={formData.firstName}
          required
          onChange={(e) => handleChange("firstName", e.target.value)}
          onBlur={() => handleBlur("firstName")}
        />
      </FormField>

      <FormField
        label={<><span>Last Name</span> <Required /></>}
        htmlFor='last-name'
        hasError={touchedFields.lastName && !isLastNameValid()}
        errorMessage={invalidLastNameErrorMessage}
      >
        <input
          type='text'
          id='last-name'
          name='last-name'
          value={formData.lastName}
          required
          onChange={(e) => handleChange("lastName", e.target.value)}
          onBlur={() => handleBlur("lastName")}
        />
      </FormField>

      <FormField
        label={<><span>Email</span> <Required /></>}
        htmlFor='email'
        hasError={touchedFields.email && !isEmailValid()}
        errorMessage={invalidEmailErrorMessage}
      >
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          required
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
        />
      </FormField>

      <FormField
        label={<><span>Mobile Number</span> <Required /></>}
        htmlFor='mobile'
        hasError={touchedFields.mobile && !isMobileValid()}
        errorMessage={invalidMobileErrorMessage}
      >
        <input
          type='tel'
          id='mobile'
          name='mobile'
          value={formData.mobile}
          required
          placeholder='12-digit mobile number'
          onChange={(e) => handleChange("mobile", e.target.value)}
          onBlur={() => handleBlur("mobile")}
        />
      </FormField>

      <FormField
        label={<><span>Date</span> <Required /></>}
        htmlFor='booking-date'
        hasError={touchedFields.date && !isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type='date'
          id='booking-date'
          name='booking-date'
          min={minimumDate}
          value={formData.date}
          required
          onChange={handleDateChange}
          onBlur={() => handleBlur("date")}
        />
      </FormField>

      <FormField
        label={<><span>Time</span> <Required /></>}
        htmlFor='booking-time'
        hasError={touchedFields.time && !isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <select
          id='booking-time'
          name='booking-time'
          value={formData.time}
          required
          onChange={(e) => handleChange("time", e.target.value)}
          onBlur={() => handleBlur("time")}
        >
          <option value='' disabled>Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label={<><span>Number of guests</span> <Required /></>}
        htmlFor='booking-number-guests'
        hasError={touchedFields.numberOfGuests && !isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type='number'
          id='booking-number-guests'
          name='booking-number-guests'
          value={formData.numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required
          placeholder='Enter number of guests'
          onChange={(e) => handleChange("numberOfGuests", parseInt(e.target.value, 10))}
          onBlur={() => handleBlur("numberOfGuests")}
        />
      </FormField>

      <FormField
        label={<><span>Occasion</span> <Required /></>}
        htmlFor='booking-occasion'
        hasError={touchedFields.occasion && !isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <select
          id='booking-occasion'
          name='booking-occasion'
          value={formData.occasion}
          required
          onChange={(e) => handleChange("occasion", e.target.value)}
          onBlur={() => handleBlur("occasion")}
        >
          <option value='' disabled>Select occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </FormField>

      <button
        className='btn btn-warning mt-3 button-primary'
        type='submit'
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
