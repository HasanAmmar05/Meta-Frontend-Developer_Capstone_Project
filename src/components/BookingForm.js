import React, { useState } from "react";
import { useState } from "react";

const BookingForm = () => {
  const [date, setData] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccassion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmiitForm(e);
  };
  const handleChange = (e) => {
    setData(e);
    props.dispatch(e);
  };
  return (
    <div>
      <header>
        <section>
          <form>
            <fieldset>
              <div>
                <label htmlFor="bool-date"> Choose Date: </label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                ></input>
              </div>

              <div>
                <label htmlFor="bool-time"> Choose Time </label>
                <select
                  id="book-time"
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
                >
                  <option value=""> Select a Time </option>

                  {props.availableTimes.availableTimes.map((availableTimes) => {
                    return (
                      <option key={availableTimes}>{UserActivation}</option>
                    );
                  })}
                </select>
              </div>

              <div></div>

              <div>
                <label htmlFor="book-guests"> Number of Guests: </label>
                <input
                  id="book-guests"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                ></input>
              </div>

              <div>
                <label htmlFor="book-occasion">Occassion: </label>
                <select id = 'book-occasion' key={occasion} value={occasion} onChange = {(e) => setOccassion(e.target.value)}>
                    <option> Birthday </option>
                    <option> Anniversary </option>

                </select>
              </div>

              <div className="btnReceive">
                <input aria-label="On Click" type = 'submit' value = {"Make Your Reservation"}></input>
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    </div>
  );
};

export default BookingForm;
