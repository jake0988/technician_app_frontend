import React from "react";
import { Link } from "react-router-dom";
import { DeletePianoButton } from "./DeletePianoButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPianos } from "../../actions/addPiano";
import { Table } from "react-bootstrap";
import Td from "../appointments/Td";
import { v4 as uuidv4 } from "uuid";
import { PianoListTable } from "./PianoListTable";
import { useRef } from "react";
import { Buttons } from "bootstrap";

export const PianoList = ({
  userId,
  customerId,
  history,
  isCustomerCard,
  isAppointmentCard,
  appointmentId,
}) => {
  const dispatch = useDispatch();
  const render = useRef();
  useEffect(() => {
    dispatch(getPianos(userId));
    render.current = renderPianos();
  }, [userId]);
  const customer = useSelector((state) =>
    state.customers.find((customer) => customer.id === customerId)
  );
  const customerName = customer.attributes.name;
  const pianos = useSelector((state) => state.pianos);

  const currentCustomerPianos = pianos.filter(
    (piano) => piano.attributes.customer_id === parseInt(customerId)
  );
  const currentAppointmentPianos = pianos.filter(
    (piano) => piano.attributes.appointment_id === parseInt(appointmentId)
  );
  function image(piano) {
    return piano ? (
      <img src={piano} alt="Piano" height="100" width="100"></img>
    ) : null;
  }
  function renderPianos() {
    return !pianos ? (
      <h1>"No Pianos in Database"</h1>
    ) : isCustomerCard ? (
      <PianoListTable
        userId={userId}
        image={image}
        history={history}
        currentCustomerId={customerId}
        customerName={customerName}
        currentCustomerPianos={currentCustomerPianos}
        pianos={pianos}
        isCustomerCard={isCustomerCard}
      />
    ) : isAppointmentCard ? (
      <PianoListTable
        userId={userId}
        customerName={customerName}
        currentCustomerId={customerId}
        image={image}
        history={history}
        pianos={pianos}
        currentAppointmentPianos={currentAppointmentPianos}
        isAppointmentCard={isAppointmentCard}
      />
    ) : null;
  }
  return <div>{render.current}</div>;
};
