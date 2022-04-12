import React from "react";
import { Link } from "react-router-dom";
import currentCustomer from "../../../reducers/currentCustomer";

export const AddAppointmentButton = ({
  addAppointment,
  userId,
  id,
  history,
  customer,
  setCurrentCustomer,
}) => {
  return (
    // <Link to={`/users/${userId}/customers/${id}/appointments/new`} id={id}>
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        return (
          setCurrentCustomer(customer),
          history.push(`/users/${userId}/customers/${id}/appointments/new`)
        );
      }}
    >
      Add Appointment
    </button>
    // </Link>
  );
};
