import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
  const seedRandom = function(seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed & m;
    return function() {
      return (s = s * a % m) / m;
    };
  };

  const fetchAPI = function(date) {
    let result = [];
    let random = seedRandom(date.getDate());
    console.log("Fetching times for date:", date.toDateString()); // Debugging
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    console.log("Generated times:", result); // Debugging
    return result;
  };

  const submitAPI = function(formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, action) {
    console.log("Updating times with date:", action.date.toDateString()); // Debugging
    return { availableTimes: fetchAPI(action.date) };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/" element={<Header />} />
      </Routes>
    </main>
  );
};

export default Main;
