import React from "react";
import { Link } from "react-router-dom";
import Login from "./users/Login";
import Signup from "./users/Signup";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment, { parseZone } from "moment";
import { useState, useEffect } from "react";

const localizer = momentLocalizer(moment);

const state = {
  events: [
    {
      start: moment("11-25-2021", "MM-DD-YYYY").toDate(),
      end: moment("11-25-2021", "MM-DD-YYYY").add(1, "hours").toDate(),
      title: "Some title",
    },
  ],
};

const OneCalendar = (
  <Calendar
    localizer={localizer}
    events={state.events}
    defaultDate={new Date()}
    defaultView="month"
    endAccessor="end"
    style={{ height: 500 }}
  />
);

export const Home = ({
  loggedIn,
  appointments,
  appointmentsList,
  currentUser,
}) => {
  if (currentUser) {
    appointmentsList(currentUser);
  }
  // const [appointments, setMyAppointments] = useState({
  //   events: [
  //     {
  //       start: moment("11-25-2021", "MM-DD-YYYY").toDate(),
  //       end: moment("11-25-2021", "MM-DD-YYYY").add(1, "hours").toDate(),
  //       title: "Some title",
  //     },
  //   ],
  // });
  function dateChanger(date) {
    date = date.split("-");
    const dateA = date.shift();
    date.push(dateA);
    const dateB = date.join("-");
    return dateB;
  }

  useEffect(() => {
    if (appointments !== "0") {
      state.events = appointments.map((appointment) => ({
        start: moment(appointment.attributes.date, "YYYY-MM-DD").toDate(),
        end: moment(appointment.attributes.date).add(1, "hours").toDate(),
        title: "asdg",
      }));

      // debugger;
    }
  });
  const appointmentsChanged = function (appointments) {
    appointments.map((appointment) => {
      const date = dateChanger(appointment.attributes.date);
      return (appointment.attributes.date = date);
    });
  };
  // appointmentsChanged(appointments);

  const homeRender = !loggedIn ? (
    <h2>
      Welcome, please{" "}
      <Link to="/signup" onClick={() => <Signup />}>
        Sign Up
      </Link>{" "}
      or{" "}
      <Link to="/login" onClick={() => <Login />}>
        Login
      </Link>
    </h2>
  ) : (
    <Calendar
      localizer={localizer}
      events={state.events}
      defaultDate={new Date()}
      defaultView="month"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
  return <div>{homeRender}</div>;
};
