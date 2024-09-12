import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (!isNaN(selectedDate.getTime())) {
      setDate(e.target.value);
      dispatch({ date: selectedDate });
    } else {
      console.error("Invalid date format");
    }
  };

  useEffect(() => {
    // Ensure times are updated when availableTimes changes
    setTime(""); // Reset selected time when availableTimes change
  }, [availableTimes]);

  return (
    <div>
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="book-date">Choose Date:</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={handleDateChange}
                  type="date"
                  required
                />
              </div>

              <div>
                <label htmlFor="book-time">Choose Time:</label>
                <select
                  id="book-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <option value="">Select a Time</option>
                  {availableTimes && availableTimes.length > 0 ? (
                    availableTimes.map((timeOption, index) => (
                      <option key={index} value={timeOption}>
                        {timeOption}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>No Available Times</option>
                  )}
                </select>
              </div>

              <div>
                <label htmlFor="book-guests">Number of Guests:</label>
                <input
                  id="book-guests"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="book-occasion">Occasion:</label>
                <select
                  id="book-occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>

              <div className="btnReceive">
                <button type="submit">Make Your Reservation</button>
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    </div>
  );
};

export default BookingForm;
