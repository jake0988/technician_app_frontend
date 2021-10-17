import React from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export const UserNav = ({
  currentUser,
  currentCustomer,
  customers,
  pianos,
}) => {
  const userCard = (
    <div className="border border-dark">
      <h1>Welcome {currentUser.name} </h1>
      <Logout />
      <Row>
        <Col>
          <p>Customers in Database: {customers.length}</p>
          <p>Pianos in Database: {pianos.length}</p>
        </Col>
        <Col className="d-flex justify-content-end">
          {currentCustomer.name ? (
            <Link to={`/pianos/new`}>
              <button className="button">
                Add Piano for Customer: {currentCustomer.name}
              </button>
            </Link>
          ) : null}
        </Col>
      </Row>
    </div>
  );
  return <div>{userCard}</div>;
};
