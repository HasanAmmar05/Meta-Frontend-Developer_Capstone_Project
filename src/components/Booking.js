import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <BookingForm
      availaableTimes={props.availaableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
      
    ></BookingForm>
  );
};

export default Booking;
