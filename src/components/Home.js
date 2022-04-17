import React from "react";
import { Link } from "react-router-dom";
import Login from "./users/Login";
import Signup from "./users/Signup";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment, { parseZone } from "moment";
import { useState, useEffect } from "react";
import { customerList } from "../actions/customerList";

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

export const Home = ({
  loggedIn,
  appointments,
  appointmentsList,
  userId,
  history,
  customers,
}) => {
  useEffect(() => {
    if (userId) {
      appointmentsList(userId);
    }
    function customerName(appointment) {
      const customer = customers.find(
        (customer) =>
          customer.attributes.id === appointment.attributes.customer_id
      );

      return customer ? customer.attributes.name : "No Name";
    }
    if (appointments !== "0") {
      state.events = appointments.map((appointment) => ({
        start: moment(appointment.attributes.date, "YYYY-MM-DD").toDate(),
        end: moment(appointment.attributes.date).add(1, "hours").toDate(),
        title: customerName(appointment),
        customerId: appointment.attributes.customer_id,
        id: appointment.id,
      }));

      // debugger;
    }
  }, [userId]);
  function dateChanger(date) {
    date = date.split("-");
    const dateA = date.shift();
    date.push(dateA);
    const dateB = date.join("-");
    return dateB;
  }

  function renderAppointmentCard(event) {
    history.push(
      `/users/${userId.id}/customers/${event.customerId}/appointments/${event.id}`
    );
  }

  const appointmentsChanged = function (appointments) {
    appointments.map((appointment) => {
      const date = dateChanger(appointment.attributes.date);
      return (appointment.attributes.date = date);
    });
  };

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
      onSelectEvent={(slotInfo) => {
        renderAppointmentCard(slotInfo);
      }}
      selectable
      popup={true}
      style={{ height: 500 }}
    />
  );
  return <div>{homeRender}</div>;
};
