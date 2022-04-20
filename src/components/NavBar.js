import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { destroyCustomer } from "../actions/customerList";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

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
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container fluid>
        {history.goBack ? (
          <ArrowLeft
            color="royalblue"
            size={40}
            onClick={() => {
              history.goBack()
            }}
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
            to={`/users/${currentUser.id}/customers`}
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
          to={`/users/${currentUser.id}/customers/new`}
        >
          Add A Customer
        </NavLink>
        <ArrowRight
            color="royalblue"
            size={40}
            onClick={() => {
              history.goForward()
            }}/>
      </Container>
    </Navbar>
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
