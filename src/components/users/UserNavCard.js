import React from "react";
import Logout from "./Logout";
import { Table, Row, Col } from "react-bootstrap";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import { useState } from "react";
import { useEffect } from "react";

export const UserNavCard = ({userId, currentCustomer, history, currentAppointment}) => {
  const [link, setLink] = useState()

  function goToPage(e) {
    e.preventDefault()
    setLink(linkDestination)
    history.push(link)
  }

  function linkDestination() {
    if (currentAppointment) {
      return `/users/${userId}/customers/${currentCustomer.id}/appointments/${currentAppointment.id}/pianos/new`
    }
    return `/users/${userId}/customers/${currentCustomer.id}/pianos/new`
  }
return (
 
      /* {currentCustomer && currentAppointment ? (
        <Link
          to={`/users/${userId}/customers/${currentCustomer}/appointments/${currentAppointment}/pianos/new`}
        >
          <button className="button">
            Add Piano for Customer: {currentCustomer.attributes.name}
          </button>
        </Link>
       ) : currentCustomer ? ( */
        /* <Link
          to={`/users/${userId}/customers/${currentCustomer.id}/pianos/new`}
        >    /* </Link> */
        <Col>
          <button type='input' value="button-value" id="addPiano" onClick={(e)=>goToPage}>
            Add Piano
          </button>
        </Col>
     
       )  
 
}