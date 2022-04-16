import React from "react";
import { Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Td from "./Td";
import { useDispatch } from "react-redux";
import { setCurrentAppointment } from "../../actions/appointment";
import { setCurrentCustomer } from "../../actions/currentCustomer";

function AppointmentCard({ id, customerId }) {
  const dispatch = useDispatch()
  const currentAppointment = useSelector((state) => {
    return state.currentAppointment !== id ? id : state.currentAppointment.id
  })
  useEffect(()=>{
  //     clearCurrentAppointment()
  if (currentAppointment) {
      dispatch(setCurrentAppointment(currentAppointment))}
      if (customerId){
      dispatch(setCurrentCustomer(customerId))}
    },[])
  
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
      </thead>
      
    </Table> : "No Appointments"
  );

  return <div>{appointmentList}</div>;
}

export default AppointmentCard;
