import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { destroyCustomer } from "../actions/customerList";
import { UserNav } from "./users/UserNav";
import { Row, Col } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

const NavBar = ({
  currentUser,
  currentCustomer,
  history,
  destroyCustomer,
  currentPiano,
  pianos,
  customers,
}) => {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Nav className="me-auto">
          {history.goBack ? (
            <ArrowLeft
              color="royalblue"
              size={40}
              onClick={() => history.goBack()}
            />
          ) : null}

          <NavLink
            exact
            activeClassName="active"
            activeStyle={{
              background: "blue",
              color: "white",
            }}
            to={`/`}
          >
            Home
          </NavLink>
          {customers.length > 0 ? (
            <NavLink
              exact
              activeClassName="active"
              activeStyle={{
                background: "blue",
                color: "white",
              }}
              to={`/customers`}
            >
              Customer List
            </NavLink>
          ) : null}

          <NavLink
            exact
            activeClassName="active"
            activeStyle={{
              background: "blue",
              color: "white",
            }}
            to={`/customers/new`}
          >
            Add A Customer
          </NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    currentCustomer: state.currentCustomer,
    currentPiano: state.currentPiano,
    pianos: state.pianos,
    customers: state.customers,
  };
};

export default connect(mapStateToProps, { destroyCustomer })(NavBar);
