import React from "react";
import { NavLink, Table } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Td from "./Td";

function AppointmentCard({ setCurrentAppointment, id }) {
  useEffect(()=>{setCurrentAppointment(id)},[id])
  const appointment = useSelector((state) => state.appointments.find(appointment => appointment.id === id))
  const appointmentList = ( appointment ?
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>initial_a4</th>
          <th>work_done</th>
          <th>hours</th>
          <th>price</th>
          <th>Date Created</th>
        </tr>
        <tr>
        <th>{appointment.attributes.date}</th>
          <th>{appointment.attributes.initial_a4}</th>
          <th>{appointment.attributes.work_done}</th>
          <th>{appointment.attributes.hours}</th>
          <th>{appointment.attributes.price}</th>
          <th>{appointment.attributes.created_at}</th>
        </tr>
<Td><img src='https://faustharrisonpianos.com/wp-content/uploads/2022/03/259372.jpg' alt="Piano" height='100' width='100'/></Td>
      </thead>
      
    </Table> : "No Appointments"
  );

  return <div>{appointmentList}</div>;
}

export default AppointmentCard;
