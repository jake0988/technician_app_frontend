import React from "react";
import { Link } from "react-router-dom";
import Login from "./users/Login";
import Signup from "./users/Signup";
import { MyCalendar } from "./MyCalendar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const state = {
  events: [
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
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

export const Home = ({ loggedIn }) => {
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
