import React, { useRef } from "react";
import { Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { DeletePianoButton } from "./DeletePianoButton";
import Td from "../appointments/Td";
import { useEffect } from "react";

export const PianoListTable = ({userId, history, pianos, image, customerId, appointmentId, currentCustomerPianos, currentAppointmentPianos, isCustomerCard, isAppointmentCard}) => {
  const current = useRef()
  useEffect(()=>{
    current.current = currentVariable(isCustomerCard, isAppointmentCard)
  }, [])
 function currentVariable(isCustomer, isAppointment) {
    return isCustomer ? currentCustomerPianos                              
   : isAppointment ? currentAppointmentPianos
   : null
  }
  console.log("curref", current.current, "Curent", currentCustomerPianos, "iscustomer?", isCustomerCard)
function tableList() { 
 
    return(
 <Table striped bordered hover size="sm">
  <thead>
    <tr>
    <th key={uuidv4(1)}>#</th>
    <th key={uuidv4(1)}>Make</th>
    <th key={uuidv4(1)}>Model</th>
    <th key={uuidv4(1)}>picture</th>
  </tr>
  </thead>
  <tbody>
    {/* {console.log(currentVariable())} */}
    
  {currentVariable(isCustomerCard, isAppointmentCard) ? currentVariable(isCustomerCard, isAppointmentCard).map((piano, key) => (
    <tr>
 
  <Td key={uuidv4(key)} to={`/users/${userId}/customers/${customerId}/pianos/${piano.attributes.id}`}>{key + 1}</Td>
  <Td key={uuidv4(key)}>{piano.attributes.make}</Td>
  <Td key={uuidv4(key)}>{piano.attributes.model}</Td>
  <Td key={uuidv4(key)}>{image(piano.attributes.image)}</Td>
      <td>
        <div>
      <DeletePianoButton key={uuidv4(1)}
        customerId={customerId}
        pianoId={piano.attributes.id}
        history={history}
        userId={userId}
      />
      </div>
      </td>
    </tr>
  ))
  : null}
</tbody>
</Table>
)}
  return (
tableList()
  )
}