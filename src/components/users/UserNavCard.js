import React from "react";
import Logout from "./Logout";
import { Table, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import { useState } from "react";
import { useEffect } from "react";

export const UserNavCard = ({
  userId,
  currentCustomerId,
  history,
  currentAppointmentId,
}) => {
  const [link, setLink] = useState();

  function goToPage(e) {
    e.preventDefault();
    history.push(linkDestination());
  }

  function linkDestination() {
    if (currentAppointmentId) {
      return `/users/${userId}/customers/${currentCustomerId}/appointments/${currentAppointmentId}/pianos/new`;
    }
    return `/users/${userId}/customers/${currentCustomerId}/pianos/new`;
  }
  return (
  
      <Button type="input" className="add-button" onClick={(e) => goToPage(e)}>
        Create New Piano
      </Button>
  
  );
};
