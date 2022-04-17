import React from "react";
import { Button } from "react-bootstrap";

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
    <Button
      className="add-button"
      onClick={(e) => {
        e.preventDefault();
        return (
          setCurrentCustomer(customer),
          history.push(`/users/${userId}/customers/${id}/appointments/new`)
        );
      }}
    >
      Add Appointment
    </Button>
    // </Link>
  );
};
