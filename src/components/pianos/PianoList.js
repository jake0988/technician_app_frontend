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

export const PianoList = ({
  userId,
  customerId,
  history,
  isCustomerCard,
  isAppointmentCard,
  appointmentId,
}) => {
  const dispatch = useDispatch()
  const render = useRef()
  useEffect(()=>{
    dispatch(getPianos(userId))
    render.current = renderPianos()
  },[userId])
  const pianos = useSelector((state)=>state.pianos)
  const currentCustomerPianos = pianos.filter((piano)=>piano.attributes.customer_id === parseInt(customerId))
  const currentAppointmentPianos = pianos.filter((piano)=>piano.attributes.appointment_id === parseInt(appointmentId))
  console.log("currentcustomerpianos", currentCustomerPianos)
  function image(piano) {
    return piano ? <img src={piano} alt="Piano" height="100" width="100"></img> : null 
  }
  function renderPianos(){ 
  return !pianos 
  ? <h1>"No Pianos in Database"</h1> 
  : isCustomerCard 
  ? <PianoListTable userId={userId} image={image} history={history} customerId={customerId} 
  currentCustomerPianos={currentCustomerPianos} pianos={pianos} isCustomerCard={isCustomerCard}/> 
  :  isAppointmentCard 
  ? <PianoListTable userId={userId} image={image} history={history} pianos={pianos} currentAppointmentPianos={currentAppointmentPianos} isAppointmentCard={isAppointmentCard}/> 
  : null
  }
  // debugger
//   let renderPianos = "No Pianos In Database"

//   if (!isCustomerCard){
//     renderPianos = currentAppointmentPianos.map((piano) => {
//      const { model, make, id } = piano.attributes;
//    return (
//      <li key={id}>
//        <Link to={`/users/${userId}/customers/${customerId}/appointments/${currentAppointment}/pianos/${id}`}>
//          <span>Model: {model}</span> <span>Make: {make}</span>{" "}
//          <div>
//            <DeletePianoButton
//              props={props}
//              userId={user}
//              customerId={customerId}
//              pianoId={piano.attributes.id}
//              history={history}
//            />
//          </div>
//        </Link>
//      </li>
//      );
//    })
//  }
// if (isCustomerCard)


    
//     if (!pianos)  {renderPianos = "No Pianos In Database"}
//     else if (pianos) {
// renderPianos = <Table striped bordered hover size="sm">
//   <thead>
//     <tr>
//     <th>#</th>
//     <th>Make</th>
//     <th>Model</th>
//     <th>picture</th>
//     <th></th>
//   </tr>
//   </thead>
//   <tbody>
//   {currentCustomerPianos.map((piano, key) => (
//     <tr>
 
//   <Td key={uuidv4(key)} to={`/users/${userId}/customers/${customerId}/pianos/${piano.attributes.id}`}>{key + 1}</Td>
//   <Td key={uuidv4(key)}>{piano.attributes.make}</Td>
//   <Td key={uuidv4(key)}>{piano.attributes.model}</Td>
//   <Td key={uuidv4(key)}>{image(piano.attributes.image)}</Td>
//       <td>
//         <div>
//       <DeletePianoButton
//         destroyPiano={destroyPiano}
//         customerId={customerId}
//         id={piano.attributes.id}
//         history={history}
//         userId={user.id}
//       />
//       </div>
//       </td>


//     </tr>
//   ))
//   }
// </tbody>
// </Table>
    // }
  
 return <div>{render.current}</div>; 
};
